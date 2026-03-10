import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const authOptions = {
    debug: process.env.NODE_ENV === 'development',
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                try {
                    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
                        method: 'POST',
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                            returnSecureToken: true
                        }),
                        headers: { "Content-Type": "application/json" }
                    });

                    const data = await res.json();

                    if (res.ok && data.idToken) {
                        return { id: data.localId, email: data.email };
                    }

                    console.error("Firebase auth error:", data?.error?.message);
                    return null;
                } catch (error) {
                    console.error("Credentials error:", error);
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn({ user, account }) {
            console.log('Sign-in attempt:', { provider: account?.provider, email: user?.email });

            // Save every successful login to Firestore "users" collection
            // Fire-and-forget: don't await so login is never blocked
            if (db && user?.email) {
                const userRef = doc(db, "users", user.email);
                setDoc(userRef, {
                    email: user.email,
                    name: user.name || null,
                    image: user.image || null,
                    provider: account?.provider || "unknown",
                    lastSignIn: new Date().toISOString(),
                }, { merge: true })
                    .then(() => console.log("User saved to Firestore:", user.email))
                    .catch((error) => console.error("Error saving user to Firestore:", error));
            }

            return true;
        },
        async redirect({ url, baseUrl }) {
            // Ensure redirects stay on your domain (prevents open redirect attacks)
            if (url.startsWith('/')) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
