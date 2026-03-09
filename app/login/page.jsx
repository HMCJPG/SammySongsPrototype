'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (result?.error) {
            setError('Invalid email or password');
            setLoading(false);
        } else {
            setSubmitted(true);
        }
    };

    return (
        <main className="login-page" style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '600px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', borderTop: '8px solid var(--accent-color)' }}>

                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>
                    Welcome Back!
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
                    Log in to continue your child's financial literacy journey.
                </p>

                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                    >
                        <button
                            type="button"
                            onClick={() => signIn('google', { callbackUrl: '/' })}
                            className="btn btn-sharp"
                            style={{ width: '100%', fontSize: '1.2rem', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: '#444', border: '2px solid #ddd' }}
                        >
                            <img src="https://authjs.dev/img/providers/google.svg" alt="Google Logo" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                            Log in with Google
                        </button>

                        <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
                            <span style={{ margin: '0 15px', color: '#999', fontSize: '0.9rem', fontWeight: 'bold' }}>OR</span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
                        </div>

                        {error && (
                            <div style={{ color: '#d32f2f', background: '#ffebee', padding: '10px', borderRadius: '8px', fontSize: '0.9rem' }}>
                                {error}
                            </div>
                        )}
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '15px 20px', borderRadius: '12px', border: '2px solid #ddd', fontSize: '1.1rem', width: '100%' }}
                        />
                        <input
                            type="password"
                            required
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: '15px 20px', borderRadius: '12px', border: '2px solid #ddd', fontSize: '1.1rem', width: '100%' }}
                        />
                        <button disabled={loading} type="submit" className="btn btn-pill" style={{ width: '100%', fontSize: '1.2rem', padding: '15px', opacity: loading ? 0.7 : 1 }}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>
                ) : (
                    <div style={{ padding: '30px', background: '#e8f5e9', borderRadius: '16px', color: '#2e7d32' }}>
                        <i className="fas fa-check-circle" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Logged in successfully!</h3>
                        <p>Redirecting you to the dashboard...</p>
                        <br />
                        <Link href="/" className="btn btn-sharp" style={{ background: 'white', color: '#2e7d32', border: '2px solid #2e7d32' }}>
                            Return Home
                        </Link>
                    </div>
                )}

                <div style={{ marginTop: '30px', color: '#888', fontSize: '0.9rem' }}>
                    <p>Don't have an account? <Link href="/free-trial" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Sign Up for a Free Trial</Link></p>
                </div>
            </div>
        </main>
    );
}
