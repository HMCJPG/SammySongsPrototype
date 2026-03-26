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
            const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'YOUR_WEB_APP_URL_HERE';
            
            // Use a timeout to avoid the user getting stuck on 'Joining...' forever
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);
            
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                redirect: 'follow',
                body: new URLSearchParams({ email: email }),
                signal: controller.signal,
            });
            
            clearTimeout(timeoutId);
            
            // With no-cors, we can't read the response, so we assume success if no network error
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Error submitting email:', error);
            // If aborted due to timeout, still treat as potential success
            // (Google Apps Script redirects can cause opaque responses)
            if (error.name === 'AbortError') {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
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

            {/* Impact Strip: Positioning & Parenting Tool */}
            <section style={{ backgroundColor: '#1b5e20', padding: '36px 20px', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '820px' }}>
                    <p style={{ margin: '0 0 10px 0', fontSize: '1.1rem', fontWeight: 600, color: '#a5d6a7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        A must-have parenting tool that shapes a child's future
                    </p>
                    <h2 style={{ margin: 0, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.3 }}>
                        This is where financial education begins.
                    </h2>
                </div>
            </section>

            {/* Featured Content (H3) - Moved up! */}
            <section className="featured-content" style={{ padding: '0px 20px 80px 20px', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: 'var(--text-dark)' }}>
                        Featured Song & Story
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyItems: 'center', alignItems: 'flex-start' }}>

                        {/* Left Column: Song + How It Works */}
                        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            {/* Featured Karaoke Video */}
                            <div style={{ background: 'white', borderRadius: '24px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '4px solid var(--accent-color)', textAlign: 'center' }}>
                                <i className="fas fa-music" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '15px' }}></i>
                                <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '20px', marginTop: 0 }}>Song</h4>
                                <CustomVideoPlayer 
                                    src="/assets/videos/moneyrules.mp4" 
                                    poster="/assets/images/pig_book.png" 
                                    autoScroll={false}
                                />
                                <div style={{ marginTop: '20px' }}>
                                    <p style={{ color: '#666', margin: 0, fontSize: '1.05rem', lineHeight: '1.5' }}>Kids learn that following the basic money rules (save, earn, spend smart, give wisely, and invest) helps them reach their goals and make their dreams come true.</p>
                                </div>
                            </div>

                            {/* How It Works, own green dashed border, outside the song card */}
                            <div style={{ border: '3px dashed #4caf50', borderRadius: '16px', padding: '22px 18px', backgroundColor: '#f1f8f1', textAlign: 'center' }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#2e7d32', marginTop: 0, marginBottom: '14px' }}>
                                    How It Works: Simple, Fun, Done
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {[
                                        { step: 'Step 1', text: 'Listen to a song' },
                                        { step: 'Step 2', text: 'Read a story' },
                                        { step: 'Step 3', text: 'Do activities and talk about it' },
                                        { step: 'Step 4', text: 'Make it a habit!' },
                                    ].map(({ step, text }) => (
                                        <div key={step} style={{ background: 'white', border: '2px solid #4caf50', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left' }}>
                                            <span style={{ fontWeight: 700, color: '#2e7d32', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap', minWidth: '48px' }}>{step}</span>
                                            <span style={{ color: '#333', fontSize: '0.92rem', fontWeight: 500 }}>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Story/Flipbook & CTA */}
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ background: 'var(--accent-color)', color: 'white', padding: '30px', borderRadius: '24px', textAlign: 'center' }}>
                                <i className="fas fa-book-open" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: 0 }}>Story</h4>
                                {/* Story cover image */}
                                <img
                                    src="/assets/images/shortstoryimage.png"
                                    alt="Once Upon a Bot story cover"
                                    style={{ width: '100%', borderRadius: '12px', marginBottom: '16px', display: 'block' }}
                                />
                                {/* PDF storybook link */}
                                <a
                                    href="/assets/storybooks/OnceUponABot%20-%20The-Night-Money-Made-Scentsationally-Good-Cents-.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginTop: '10px',
                                        padding: '16px 32px',
                                        backgroundColor: 'white',
                                        color: 'var(--accent-color)',
                                        borderRadius: '50px',
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        textDecoration: 'none',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    <i className="fas fa-book-open" style={{ fontSize: '1.4rem' }}></i>
                                    Read the Story (PDF)
                                </a>

                                {/* STORYBOOK IFRAME — uncomment below to swap back in */}
                                {/*
                                <iframe
                                    src="https://player.flipsnack.com?hash=N0ZCRDZDQThCN0Erdnhwc3V0b3F3ZA=="
                                    width="100%"
                                    height="480"
                                    seamless="seamless"
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-read; clipboard-write"
                                    style={{ borderRadius: '12px', display: 'block' }}
                                ></iframe>
                                */}
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
                        Listen to More Songs
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
                                <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}><mark>Kids learn that working and earning money feels great, and that spending it wisely means not using it all up before the next payday.</mark></p>
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

            {/* Trust & Credibility Section */}
            <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
                <div className="container">

                    {/* 25+ Years Badge */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', background: '#e8f5e9', border: '3px solid #4caf50', borderRadius: '100px', padding: '16px 36px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <span style={{ fontSize: '3rem', lineHeight: 1 }}>🏅</span>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#2e7d32', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Trusted for over</p>
                                <p style={{ margin: 0, fontSize: '2rem', fontWeight: 900, color: '#1b5e20', lineHeight: 1.1 }}>25+ Years</p>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#4caf50', fontWeight: 600 }}>by families, teachers &amp; organisations</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '36px', color: 'var(--text-dark)' }}>What Families &amp; Educators Are Saying</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', maxWidth: '900px', margin: '0 auto' }}>

                        {/* Testimonial 1 */}
                        <div style={{ background: '#f9fbe7', border: '2px solid #aed581', borderRadius: '20px', padding: '30px', position: 'relative' }}>
                            <span style={{ fontSize: '3rem', lineHeight: 1, color: '#8bc34a', position: 'absolute', top: '16px', left: '20px', opacity: 0.4 }}>&ldquo;</span>
                            <p style={{ margin: '20px 0 20px 0', fontSize: '1.05rem', color: '#333', lineHeight: 1.6, fontStyle: 'italic' }}>
                                My daughter now talks about saving and spending like a little expert. <mark>These songs made money feel fun and natural. It genuinely changed how our whole family talks about money at home.</mark>
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#4caf50', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>S</div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 700, color: '#2e7d32' }}>Sarah M.</p>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>Parent of a 7-year-old</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div style={{ background: '#e8f5e9', border: '2px solid #81c784', borderRadius: '20px', padding: '30px', position: 'relative' }}>
                            <span style={{ fontSize: '3rem', lineHeight: 1, color: '#4caf50', position: 'absolute', top: '16px', left: '20px', opacity: 0.4 }}>&ldquo;</span>
                            <p style={{ margin: '20px 0 20px 0', fontSize: '1.05rem', color: '#333', lineHeight: 1.6, fontStyle: 'italic' }}>
                                I use these songs and story kits in my classroom every week. The kids are engaged, the conversations are rich, and I can see their financial confidence growing. This is exactly what early financial education should look like.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1b5e20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>T</div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 700, color: '#1b5e20' }}>Mr. Thompson</p>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>Primary School Teacher</p>
                                </div>
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
