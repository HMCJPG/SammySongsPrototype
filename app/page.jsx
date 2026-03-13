'use client';

import Link from 'next/link';
import { useState } from 'react';
import CustomVideoPlayer from './components/CustomVideoPlayer';

export default function Home() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        
        setStatus('loading');
        try {
            // NOTE: Replace this URL with your published Google Apps Script Web App URL
            const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'YOUR_WEB_APP_URL_HERE';
            
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors', // By-passes CORS block on the browser
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email: email })
            });
            
            // With no-cors, we can't read the response properly, so we assume success if no network error
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Error submitting email:', error);
            setStatus('error');
        }
    };

    return (
        <main>
            {/* Page 1: The Home Page Banner */}
            <section style={{ width: '100%' }}>
                <img
                    src="/assets/images/bed.web.Sec1.header.png"
                    alt="BedtimeMoneyHabits.com"
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
                            <CustomVideoPlayer 
                                src="/assets/videos/moneyrules.mp4" 
                                poster="/assets/images/pig_book.png" 
                            />
                            <div style={{ marginTop: '20px' }}>
                                <p style={{ color: '#666', margin: 0, fontSize: '1.05rem', lineHeight: '1.5' }}>Kids learn that following the basic money rules (save, earn, spend smart, give wisely, and invest) helps them reach their goals and make their dreams come true.</p>
                            </div>
                        </div>

                        {/* Story/Flipbook & CTA */}
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ background: 'var(--accent-color)', color: 'white', padding: '30px', borderRadius: '24px', textAlign: 'center' }}>
                                <i className="fas fa-book-open" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Story</h4>
                                <a href="/assets/storybooks/OnceUponABot%20-%20The-Night-Money-Made-Scentsationally-Good-Cents-.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sharp" style={{ display: 'inline-block', background: 'white', color: 'var(--accent-color)', marginBottom: '15px', textDecoration: 'none' }}>Open Flipbook</a>
                                <img src="/assets/images/shortstoryimage.png" alt="Story" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
                            </div>

                            {/* Song Kit (Button) */}
                            <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '24px', textAlign: 'center', border: '2px dashed #ccc' }}>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Parent and Teacher Guides</h4>
                                <p style={{ marginBottom: '15px', color: '#666' }}>Unlock all the resources for this song.</p>
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
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Join the FREE Beta Today!</h3>
                        <p style={{ marginBottom: '15px', color: '#666' }}>
                            Be among our early supporters and help us refine the site and program to better serve kids and families around the world.
                        </p>
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            Enter your email to receive free beta access, unlock additional content, and stay informed about new updates, including our official launch.
                        </p>
                        {status === 'success' ? (
                            <div style={{ padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '12px', fontWeight: 'bold' }}>
                                Thank you for joining! We'll be in touch soon.
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <input
                                        type="email"
                                        placeholder="Email address..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        style={{ padding: '15px 20px', borderRadius: '50px', border: '2px solid #ccc', fontSize: '1.1rem', flex: '1', minWidth: '250px' }}
                                    />
                                    <button type="submit" disabled={status === 'loading'} className="btn btn-pill" style={{ margin: 0, opacity: status === 'loading' ? 0.7 : 1 }}>
                                        {status === 'loading' ? 'Joining...' : 'Join Now!'}
                                    </button>
                                </div>
                                {status === 'error' && (
                                    <p style={{ color: 'red', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}
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
                                <img src="/assets/images/joy_to_save_thumb_squirrel.png" alt="It's a Joy to Save!" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>It's a Joy to Save!</h4>
                                <div style={{ marginBottom: '15px' }}>
                                    <Link href="/videos/joy-to-save" className="btn btn-sharp" style={{ width: '100%', display: 'inline-block', textDecoration: 'none' }}><i className="fas fa-play"></i> Watch Video</Link>
                                </div>
                                <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Kids learn that saving money feels good, and that making it a habit helps their savings grow and their future shine bright.</p>
                            </div>
                        </div>

                        {/* Song 3 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#fff9c4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/earn_a_dollar_thumb_bear.png" alt="It's Good to Earn a Dollar!" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>It's Good to Earn a Dollar!</h4>
                                <div style={{ marginBottom: '15px' }}>
                                    <Link href="/videos/earn-a-dollar" className="btn btn-sharp" style={{ width: '100%', display: 'inline-block', textDecoration: 'none' }}><i className="fas fa-play"></i> Watch Video</Link>
                                </div>
                                <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Kids learn that working and earning money feels great—and that spending it wisely means not using it all up before the next payday.</p>
                            </div>
                        </div>

                        {/* Song 4 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#fce4ec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/spend_smart_thumb_owl.png" alt="Spend Smart!" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Spend Smart!</h4>
                                <div style={{ marginBottom: '15px' }}>
                                    <Link href="/videos/spend-smart" className="btn btn-sharp" style={{ width: '100%', display: 'inline-block', textDecoration: 'none' }}><i className="fas fa-play"></i> Watch Video</Link>
                                </div>
                                <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Kids learn that spending smart means planning ahead: making a list, comparing prices, checking quality, and choosing carefully before they buy.</p>
                            </div>
                        </div>

                        {/* Song 5 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#f3e5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/give_wisely_thumbnail.png" alt="Give Wisely!" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Give Wisely!</h4>
                                <div style={{ marginBottom: '15px' }}>
                                    <Link href="/videos/give-wisely" className="btn btn-sharp" style={{ width: '100%', display: 'inline-block', textDecoration: 'none' }}><i className="fas fa-play"></i> Watch Video</Link>
                                </div>
                                <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Kids learn that giving is good and most meaningful when it’s done thoughtfully and from the heart.</p>
                            </div>
                        </div>

                        {/* Song 6 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/great_habits_3d_thumbnail.png" alt="Great Habits Make a Great You" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Great Habits Make a Great You</h4>
                                <div style={{ marginBottom: '15px' }}>
                                    <Link href="/videos/great-habits" className="btn btn-sharp" style={{ width: '100%', display: 'inline-block', textDecoration: 'none' }}><i className="fas fa-play"></i> Watch Video</Link>
                                </div>
                                <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Kids learn that choosing great habits is powerful and that the habits they choose and build today help shape into a great person.</p>
                            </div>
                        </div>

                        {/* Song 7 */}
                        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <div style={{ height: '200px', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/rule_of_72_3d_thumbnail.png" alt="The Rule of 72!" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>The Rule of 72!</h4>
                                <div style={{ marginBottom: '15px' }}>
                                    <Link href="/videos/rule-of-72" className="btn btn-sharp" style={{ width: '100%', display: 'inline-block', textDecoration: 'none' }}><i className="fas fa-play"></i> Watch Video</Link>
                                </div>
                                <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Kids learn a simple formula that helps them figure out how long it will take their savings and investments to double.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* "Just the Beginning" Blurb */}
            <section style={{ padding: '0px 20px 80px 20px', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <div style={{ background: 'var(--primary-bg)', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', border: '2px dashed var(--accent-color)' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', margin: 0, fontWeight: 900, lineHeight: '1.4' }}>
                            This is just the beginning: 50+ more music videos and song kits are coming!
                        </h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
