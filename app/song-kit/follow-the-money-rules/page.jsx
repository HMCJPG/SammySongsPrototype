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
                        Everything you need to teach the golden rules of money at home, in the classroom, and anywhere kids learn.
                    </p>
                </div>

                {/* Resource Links Container */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '30px', backgroundColor: 'var(--primary-bg)', border: '6px solid var(--primary-bg)', borderRadius: '24px', boxShadow: '0 8px 16px rgba(0,0,0,0.03)' }}>

                    {/* Audio File */}
                    <a href="/assets/videos/moneyrules.mp4" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-music" style={{ fontSize: '2rem', color: '#f48fb1' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Audio Only File</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Listen on the go (MP3)</span>
                        </div>
                    </a>

                    {/* Lyrics */}
                    <a href="/assets/pdfs/Song%20Lyrics_%20Follow%20the%20Money%20Rules.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-file-alt" style={{ fontSize: '2rem', color: '#81c784' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Lyrics Sheet</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Printable PDF</span>
                        </div>
                    </a>

                    {/* Story PDF */}
                    <a href="/assets/storybooks/OnceUponABot%20-%20The-Night-Money-Made-Scentsationally-Good-Cents-.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-book" style={{ fontSize: '2rem', color: '#64b5f6' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Story PDF</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Illustrated storybook</span>
                        </div>
                    </a>

                    {/* Parent Guide */}
                    <a href="/assets/pdfs/Bedtime%20_%20Parent%20Guide%20_%20Follow%20the%20Money%20Rules!.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-users" style={{ fontSize: '2rem', color: '#ffb74d' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Parent Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Tips for discussion</span>
                        </div>
                    </a>

                    {/* Family Activity Guide */}
                    <a href="/assets/pdfs/Bedtime%20_%20Family%20Activity%20Guide%20_%20Follow%20the%20Money%20Rules!.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-puzzle-piece" style={{ fontSize: '2rem', color: '#ba68c8' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Family Activity Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Fun offline games</span>
                        </div>
                    </a>

                    {/* Teacher Guide */}
                    <a href="/assets/pdfs/Bedtime%20_%20Teacher%20Lesson%20Plan%20_%20Follow%20the%20Money%20Rules!.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2rem', color: '#4db6ac' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Teacher Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Comprehensive lesson plan</span>
                        </div>
                    </a>

                </div>

                {/* Games Hub Button */}
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/games" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        padding: '25px 50px',
                        backgroundColor: '#ffb74d',
                        color: 'white',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        boxShadow: '0 8px 20px rgba(255, 183, 77, 0.4)',
                        fontWeight: 'bold',
                        fontSize: '1.8rem'
                    }}>
                        <i className="fas fa-gamepad" style={{ fontSize: '2.5rem' }}></i>
                        <div style={{ fontWeight: 'bold' }}>
                            Play Games!
                        </div>
                    </Link>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" className="btn btn-sharp" style={{ textDecoration: 'none' }}>
                        <i className="fas fa-arrow-left"></i> <span style={{ textDecoration: 'underline' }}>Back to Home</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
