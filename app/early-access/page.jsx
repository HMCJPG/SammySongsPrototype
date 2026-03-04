'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function EarlyAccessPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '60px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', borderTop: '8px solid var(--accent-color)' }}>

                <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '20px', textAlign: 'center', fontWeight: 900 }}>
                    Get Free Early Access!
                </h1>

                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '30px', textAlign: 'center', lineHeight: '1.6' }}>
                    Something wonderful is just getting started — and your family can be among the first to experience it.
                </p>

                <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '40px', lineHeight: '1.7' }}>
                    <strong>Bedtime Songs & Stories</strong> brings together award-winning songs, stories, and financial literacy tools designed to give kids the money habits that last a lifetime. We're opening our doors early — completely free — to families who want in from the beginning.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
                    <div style={{ flex: '1 1 300px', background: '#fff8e1', padding: '30px', borderRadius: '16px', border: '1px solid #ffe082' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', fontSize: '1.1rem', color: '#444' }}>
                                <span style={{ fontSize: '1.3rem' }}>✨</span> <span>Instant access to songs, stories & resources</span>
                            </li>
                            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', fontSize: '1.1rem', color: '#444' }}>
                                <span style={{ fontSize: '1.3rem' }}>✨</span> <span>New content added as we grow</span>
                            </li>
                            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', fontSize: '1.1rem', color: '#444' }}>
                                <span style={{ fontSize: '1.3rem' }}>✨</span> <span>Lock in your spot before we launch publicly</span>
                            </li>
                        </ul>
                    </div>

                    <div style={{ flex: '1 1 300px', background: '#e8f5e9', padding: '30px', borderRadius: '16px', border: '1px solid #a5d6a7' }}>
                        <p style={{ fontSize: '1.1rem', color: '#2e7d32', marginBottom: '20px', fontWeight: 'bold' }}>
                            We welcome your feedback. It will help us build the best possible experience for kids and families.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', fontSize: '1.1rem', color: '#444' }}>
                                <span style={{ fontSize: '1.3rem' }}>✅</span> <span>Full access to all current songs & stories</span>
                            </li>
                            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', fontSize: '1.1rem', color: '#444' }}>
                                <span style={{ fontSize: '1.3rem' }}>✅</span> <span>New content added regularly</span>
                            </li>
                            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', fontSize: '1.1rem', color: '#444' }}>
                                <span style={{ fontSize: '1.3rem' }}>✅</span> <span>Your voice shapes what we build next</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button
                        onClick={() => signIn('google', { callbackUrl: '/' })}
                        className="btn btn-pill"
                        style={{ fontSize: '1.4rem', padding: '18px 40px', boxShadow: '0 8px 15px rgba(233, 30, 99, 0.3)' }}
                    >
                        Get Free Early Access. Sign Up Today!
                    </button>
                    <p style={{ marginTop: '15px', color: '#888', fontSize: '0.9rem' }}>
                        Already have an account? <Link href="/login" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Log In</Link>
                    </p>
                </div>

            </div>
        </main>
    );
}
