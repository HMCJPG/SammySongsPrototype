'use client';

import Link from 'next/link';

export default function SpendSmartPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Link href="/" className="btn btn-sharp" style={{ marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
                    <i className="fas fa-arrow-left"></i> Back to Home
                </Link>

                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--text-dark)' }}>Spend Smart!</h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Video Player (takes up most of the page) */}
                    <div style={{ flex: '3 1 600px', background: 'white', padding: '20px', borderRadius: '24px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                        <video
                            src="/assets/videos/Spending Smart.mp4"
                            controls
                            style={{ width: '100%', borderRadius: '12px', display: 'block', backgroundColor: 'var(--primary-bg)' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Right Column */}
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <i className="fas fa-music" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '20px' }}></i>
                            <h3 style={{ marginBottom: '20px', color: 'var(--accent-color)' }}>Keep Learning!</h3>
                            <p style={{ marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>Get the complete resource pack to help teach and reinforce the lessons from this song.</p>
                            <Link href="/song-kit" className="btn btn-pill" style={{ textDecoration: 'none', width: '100%', fontSize: '1.2rem' }}>
                                Access Song Resources
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
