'use client';

import Link from 'next/link';

export default function GamesMenuPage() {
    return (
        <main className="games-menu-page" style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '10px' }}>
                        Sammy's Games Hub
                    </h2>
                    <p style={{ color: '#666', marginTop: '15px' }}>
                        Pick a game below and start playing!
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <Link href="/games/word-search" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-search" style={{ fontSize: '2rem', color: '#f48fb1' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Word Search</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Find the hidden words</span>
                        </div>
                    </Link>

                    <Link href="/games/memory-match" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-brain" style={{ fontSize: '2rem', color: '#81c784' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Memory Match</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Find matching pairs</span>
                        </div>
                    </Link>

                    <Link href="/games/decoder" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-user-secret" style={{ fontSize: '2rem', color: '#ba68c8' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Secret Decoder</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Crack the secret code</span>
                        </div>
                    </Link>

                    <Link href="/games/unscramble" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-pencil-alt" style={{ fontSize: '2rem', color: '#ffb74d' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Unscramble</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Unscramble the words</span>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
