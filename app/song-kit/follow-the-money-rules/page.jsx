'use client';

import Link from 'next/link';

export default function SongKitPage() {
    return (
        <main className="song-kit-page" style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '900px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '10px' }}>
                        Song Kit
                    </h2>
                    <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>
                        Follow the Money Rules
                    </h3>
                    <p style={{ color: '#666', marginTop: '15px' }}>
                        Everything you need to teach the golden rules of saving at home or in the classroom!
                    </p>
                </div>

                {/* Resource Links Container */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>

                    {/* Audio File */}
                    <a href="/assets/videos/moneyrules.mp4" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-music" style={{ fontSize: '2rem', color: '#f48fb1' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Audio Only File</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Listen on the go (MP3)</span>
                        </div>
                    </a>

                    {/* Lyrics */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-file-alt" style={{ fontSize: '2rem', color: '#81c784' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Lyrics Sheet</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Printable PDF</span>
                        </div>
                    </a>

                    {/* Story PDF */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-book" style={{ fontSize: '2rem', color: '#64b5f6' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Story PDF</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Illustrated storybook</span>
                        </div>
                    </a>

                    {/* Parent Guide */}
                    <a href="/assets/pdfs/MoneyRules_Parent_Guide%20(1).pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-users" style={{ fontSize: '2rem', color: '#ffb74d' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Parent Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Tips for discussion</span>
                        </div>
                    </a>

                    {/* Family Activity Guide */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-puzzle-piece" style={{ fontSize: '2rem', color: '#ba68c8' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Family Activity Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Fun offline games</span>
                        </div>
                    </a>

                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" className="btn btn-sharp">
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
