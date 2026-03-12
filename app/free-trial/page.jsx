'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function FreeTrialGate() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, 'free_trials'), {
                email,
                timestamp: serverTimestamp(),
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Error adding email: ", error);
            alert("There was an error submitting your email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="free-trial-page" style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '600px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', borderTop: '8px solid var(--accent-color)' }}>

                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>
                    Unlock Your Free Trial
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
                    Join Sam X Renick and give your children the gift of financial literacy. Get instant access to premium Bedtime Money Habits!
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
                            Continue with Google
                        </button>

                        <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
                            <span style={{ margin: '0 15px', color: '#999', fontSize: '0.9rem', fontWeight: 'bold' }}>OR</span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
                        </div>

                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '15px 20px', borderRadius: '12px', border: '2px solid #ddd', fontSize: '1.1rem', width: '100%' }}
                        />
                        <button disabled={loading} type="submit" className="btn btn-pill" style={{ width: '100%', fontSize: '1.2rem', padding: '15px', opacity: loading ? 0.7 : 1 }}>
                            {loading ? 'Submitting...' : 'Start My Free Trial'}
                        </button>
                    </form>
                ) : (
                    <div style={{ padding: '30px', background: '#e8f5e9', borderRadius: '16px', color: '#2e7d32' }}>
                        <i className="fas fa-check-circle" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>You're on the list!</h3>
                        <p>Keep an eye on your inbox. We'll send you your access link shortly.</p>
                        <br />
                        <Link href="/" className="btn btn-sharp" style={{ background: 'white', color: '#2e7d32', border: '2px solid #2e7d32' }}>
                            Return Home
                        </Link>
                    </div>
                )}

                <div style={{ marginTop: '30px', color: '#888', fontSize: '0.9rem' }}>
                    <p>Already have an account? <Link href="/login" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Log In</Link></p>
                </div>
            </div>
        </main>
    );
}
