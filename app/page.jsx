'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Page 1: The Home Page (The "Hook") */}
            <section className="hero-section" style={{ textAlign: 'center', padding: '80px 20px 40px 20px', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', color: 'var(--text-dark)' }}>
                        Bedtime Songs & Stories that Build Great Money Habits
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-color)', marginBottom: '20px' }}>
                        Presented by Sam X Renick, Award-Winning Financial Educator & Author
                    </h2>
                </div>
            </section>

            {/* Featured Content (H3) - Moved up! */}
            <section className="featured-content" style={{ padding: '0px 20px 80px 20px', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: 'var(--text-dark)' }}>
                        Featured Song & Story
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyItems: 'center', alignItems: 'center' }}>

                        {/* Featured Karaoke Video */}
                        <div style={{ flex: '1 1 400px', background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <video
                                src="/assets/videos/moneyrules.mp4"
                                poster="/assets/images/pig_book.png"
                                controls
                                style={{ width: '100%', display: 'block' }}
                                aria-label="Follow the Money Rules Karaoke Video"
                            ></video>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Karaoke Video: Follow the Money Rules</h4>
                                <p style={{ color: '#666' }}>Sing along and learn the golden rules of saving!</p>
                            </div>
                        </div>

                        {/* Story/Flipbook & CTA */}
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ background: 'var(--accent-color)', color: 'white', padding: '30px', borderRadius: '24px', textAlign: 'center' }}>
                                <i className="fas fa-book-open" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Story Flipbook</h4>
                                <p>Read the interactive story of Follow the Money Rules.</p>
                                <button className="btn btn-sharp" style={{ background: 'white', color: 'var(--accent-color)', marginTop: '15px' }}>Open Flipbook</button>
                            </div>

                            {/* Song Kit (Button) */}
                            <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '24px', textAlign: 'center', border: '2px dashed #ccc' }}>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Educator & Parent Resources</h4>
                                <p style={{ marginBottom: '15px', color: '#666' }}>Unlock the full resource pack for this song.</p>
                                <Link href="/song-kit/follow-the-money-rules" className="btn btn-pill" style={{ textDecoration: 'none', display: 'inline-block' }}>
                                    Access Song Kit
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Lead Capture Area - Moved down! */}
            <section className="lead-capture" style={{ padding: '80px 20px', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ background: '#fce4ec', padding: '40px', borderRadius: '24px', maxWidth: '600px', margin: '0 auto', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '4px solid var(--accent-color)', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Start Building Great Habits Today</h3>
                        <p style={{ marginBottom: '20px', color: '#666' }}>Enter your email to unlock your free trial and access exclusive content.</p>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <input
                                type="email"
                                placeholder="Email address..."
                                style={{ padding: '15px 20px', borderRadius: '50px', border: '2px solid #ccc', fontSize: '1.1rem', flex: '1', minWidth: '250px' }}
                            />
                            <button type="submit" className="btn btn-pill" style={{ margin: 0 }}>Get Free Trial</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Content Grid (H4) */}
            <section className="more-songs" style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: 'var(--text-dark)' }}>
                        More Songs & Videos
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Song 2 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#e0f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/pig_hello.png" alt="Hello Hello Hello" style={{ maxHeight: '80%' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Hello, Hello, Hello</h4>
                                <button className="btn btn-sharp" style={{ width: '100%' }}><i className="fas fa-play"></i> Watch Video</button>
                            </div>
                        </div>

                        {/* Song 3 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#fff9c4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/pig_headphones.png" alt="Saving Money is Fun" style={{ maxHeight: '80%' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Saving Money is Fun</h4>
                                <button className="btn btn-sharp" style={{ width: '100%' }}><i className="fas fa-play"></i> Watch Video</button>
                            </div>
                        </div>

                        {/* Song 4 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#fce4ec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-music" style={{ fontSize: '5rem', color: '#f48fb1' }}></i>
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Dream Big (Coming Soon)</h4>
                                <button className="btn btn-sharp" style={{ width: '100%', background: '#ccc', borderColor: '#ccc', cursor: 'not-allowed' }}>Watch Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
