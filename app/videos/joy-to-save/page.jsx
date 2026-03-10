'use client';

import Link from 'next/link';
import CustomVideoPlayer from '../../components/CustomVideoPlayer';

export default function JoyToSavePage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Link href="/" className="btn btn-sharp" style={{ marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
                    <i className="fas fa-arrow-left"></i> Back to Home
                </Link>

                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--text-dark)' }}>It's a Joy to Save!</h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Video Player (takes up most of the page) */}
                    <div style={{ flex: '3 1 600px', background: 'white', padding: '20px', borderRadius: '24px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                        <CustomVideoPlayer src="/assets/videos/It's a Joy to Save!.mp4" poster="/assets/images/joy_to_save_thumb_squirrel.png" />
                    </div>

                    {/* Right Column */}
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <i className="fas fa-music" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '20px' }}></i>
                            <h3 style={{ marginBottom: '20px', color: 'var(--accent-color)' }}>Keep Learning!</h3>
                            <p style={{ marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>Get the complete resource pack to help teach and reinforce the lessons from this song.</p>
                            <Link href="/song-kit-coming-soon" className="btn btn-pill" style={{ textDecoration: 'none', width: '100%', fontSize: '1.2rem' }}>
                                Access Song Kit
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Other Songs Links */}
                <div style={{ width: '100%', marginTop: '40px', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-dark)' }}>More Songs to Enjoy</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <Link href="/videos/money-rules" className="btn btn-pill" style={{ textDecoration: 'none', background: 'var(--primary-bg)', color: 'var(--text-dark)', border: '2px solid var(--accent-color)' }}>Follow the Money Rules!</Link>
                        <Link href="/videos/earn-a-dollar" className="btn btn-pill" style={{ textDecoration: 'none', background: 'var(--primary-bg)', color: 'var(--text-dark)', border: '2px solid var(--accent-color)' }}>It's Good to Earn a Dollar!</Link>
                        <Link href="/videos/spend-smart" className="btn btn-pill" style={{ textDecoration: 'none', background: 'var(--primary-bg)', color: 'var(--text-dark)', border: '2px solid var(--accent-color)' }}>Spend Smart!</Link>
                        <Link href="/videos/rule-of-72" className="btn btn-pill" style={{ textDecoration: 'none', background: 'var(--primary-bg)', color: 'var(--text-dark)', border: '2px solid var(--accent-color)' }}>The Rule of 72!</Link>
                        <Link href="/videos/great-habits" className="btn btn-pill" style={{ textDecoration: 'none', background: 'var(--primary-bg)', color: 'var(--text-dark)', border: '2px solid var(--accent-color)' }}>Great Habits Make a Great You</Link>
                        <Link href="/videos/give-wisely" className="btn btn-pill" style={{ textDecoration: 'none', background: 'var(--primary-bg)', color: 'var(--text-dark)', border: '2px solid var(--accent-color)' }}>Give Wisely!</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
