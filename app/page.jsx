'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Page 1: The Home Page Banner */}
            <section style={{ width: '100%' }}>
                <img
                    src="/assets/images/bed.web.Sec1.header.png"
                    alt="Bedtime Songs and Stories that Build Great Money Habits"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>

            {/* Featured Content (H3) - Moved up! */}
            <section className="featured-content" style={{ padding: '0px 20px 80px 20px', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: 'var(--text-dark)' }}>
                        Featured Song & Story
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyItems: 'center', alignItems: 'flex-start' }}>

                        {/* Featured Karaoke Video */}
                        <div style={{ flex: '1 1 400px', background: 'white', borderRadius: '24px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '4px solid var(--accent-color)', textAlign: 'center' }}>
                            <i className="fas fa-music" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '15px' }}></i>
                            <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '20px', marginTop: 0 }}>Song</h4>
                            <video
                                src="/assets/videos/moneyrules.mp4"
                                poster="/assets/images/pig_book.png"
                                controls
                                style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                                aria-label="Follow the Money Rules Karaoke Video"
                            ></video>
                            <div style={{ marginTop: '20px' }}>
                                <p style={{ color: '#666', margin: 0 }}>Sing along and learn the golden rules of money!</p>
                            </div>
                        </div>

                        {/* Story/Flipbook & CTA */}
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ background: 'var(--accent-color)', color: 'white', padding: '30px', borderRadius: '24px', textAlign: 'center' }}>
                                <i className="fas fa-book-open" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Story Flipbook</h4>
                                <a href="/assets/storybooks/OnceUponABot%20-%20The-Night-Money-Made-Scentsationally-Good-Cents-.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sharp" style={{ display: 'inline-block', background: 'white', color: 'var(--accent-color)', marginBottom: '15px', textDecoration: 'none' }}>Open Flipbook</a>
                                <img src="/assets/images/shortstoryimage.png" alt="Story Flipbook" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
                            </div>

                            {/* Song Kit (Button) */}
                            <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '24px', textAlign: 'center', border: '2px dashed #ccc' }}>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Teacher and Parent Guides</h4>
                                <p style={{ marginBottom: '15px', color: '#666' }}>Unlock the full resource pack for this song.</p>
                                <Link href="/song-kit/follow-the-money-rules" className="btn btn-pill" style={{ textDecoration: 'none', display: 'inline-block' }}>
                                    Access Song Kit
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* The Only Children's Program Blurb */}
            <section style={{ padding: '0px 20px 80px 20px', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <div style={{ background: 'var(--primary-bg)', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', border: '2px dashed var(--accent-color)' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', margin: 0, fontWeight: 900, lineHeight: '1.4' }}>
                            The Only Children's Program That Teaches Money Habits Through Songs, Stories, and Conversations!
                        </h3>
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
                                <img src="/assets/images/pig_hello.png" alt="It's a Joy to Save!" style={{ maxHeight: '80%' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>It's a Joy to Save!</h4>
                                <button className="btn btn-sharp" style={{ width: '100%' }}><i className="fas fa-play"></i> Watch Video</button>
                            </div>
                        </div>

                        {/* Song 3 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#fff9c4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/pig_headphones.png" alt="It's Good to Earn a Dollar!" style={{ maxHeight: '80%' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>It's Good to Earn a Dollar!</h4>
                                <button className="btn btn-sharp" style={{ width: '100%' }}><i className="fas fa-play"></i> Watch Video</button>
                            </div>
                        </div>

                        {/* Song 4 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#fce4ec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-music" style={{ fontSize: '5rem', color: '#f48fb1' }}></i>
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Spend Smart!</h4>
                                <button className="btn btn-sharp" style={{ width: '100%', background: '#ccc', borderColor: '#ccc', cursor: 'not-allowed' }}>Watch Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
