'use client';

import Link from 'next/link';

// Note: Next.js 'use client' pages can't directly export metadata objects.
// Since this is a simple page, we can set document.title in a useEffect if needed, 
// or let the layout handle base SEO, but given the email specifically requested
// Page title / SEO metadata, typically we'd separate this into a layout.jsx or server component.
// But we'll rely on Next 13 conventions. For client components, standard approach is:
import { useEffect } from 'react';

export default function SongKitPage() {

    useEffect(() => {
        document.title = "Follow the Money Rules – Song Kit | BedtimeMoneyHabits.com";
    }, []);

    return (
        <main className="song-kit-page" style={{ padding: '40px 20px 80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>


            <div className="container" style={{ maxWidth: '900px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '10px' }}>
                        Song Kit
                    </h2>
                    <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '15px' }}>
                        Follow the Money Rules
                    </h3>

                    {/* Song Kit Explainer Context */}
                    <p style={{ color: '#444', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 20px auto', lineHeight: '1.6' }}>
                        Each Song Kit includes everything you need to use this song at home or in the classroom. Enjoy!
                    </p>
                    {/* Membership Context text */}
                    <div style={{ background: '#e8f5e9', color: '#2e7d32', padding: '15px', borderRadius: '12px', display: 'inline-block', marginBottom: '25px', fontWeight: 'bold' }}>
                        <i className="fas fa-gift" style={{ marginRight: '8px' }}></i>
                        These resources are free to download during our Beta phase. No login required!
                    </div>

                    <div style={{ marginBottom: '20px', display: 'none' }}>
                        {/* Social Share Hook */}
                        <a href="mailto:?subject=Check%20out%20this%20Song%20Kit!&body=I%20found%20this%20great%20collection%20of%20resources%20for%20teaching%20kids%20about%20money."
                            className="btn btn-sharp"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem', padding: '10px 20px', background: 'white', color: 'var(--accent-color)', border: '2px solid var(--accent-color)', textDecoration: 'none', borderRadius: '50px' }}>
                            <i className="fas fa-share-alt"></i> Share this Song Kit
                        </a>
                    </div>
                </div>

                {/* Inline Media */}
                <div style={{ marginBottom: '40px', background: 'var(--primary-bg)', padding: '30px', borderRadius: '24px', border: '4px solid var(--accent-color)', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>Song Kit</h4>
                    <img src="/assets/images/pig_book.png" alt="Song Kit Graphic" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
                </div>

                {/* Resource Links Container */}
                <h4 id="download-resources" style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '20px', textAlign: 'center' }}>Download Resources</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', padding: '30px', backgroundColor: 'var(--light-bg)', borderRadius: '24px', border: '1px solid #eee' }}>

                    {/* Audio File (Updated Label) */}
                    <a href="/assets/videos/moneyrules.mp4" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-video" style={{ fontSize: '2.5rem', color: '#f48fb1' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Music Video</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Watch on the go (MP4)</span>
                        </div>
                    </a>

                    {/* Lyrics */}
                    <a href="/assets/pdfs/Song%20Lyrics_%20Follow%20the%20Money%20Rules.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-file-alt" style={{ fontSize: '2.5rem', color: '#81c784' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Lyrics Sheet</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Printable PDF</span>
                        </div>
                    </a>

                    {/* Story PDF */}
                    <a href="/assets/storybooks/OnceUponABot%20-%20The-Night-Money-Made-Scentsationally-Good-Cents-.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-book" style={{ fontSize: '2.5rem', color: '#64b5f6' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Story PDF</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Illustrated storybook</span>
                        </div>
                    </a>

                    {/* Parent Guide */}
                    <a href="/assets/pdfs/Bedtime%20_%20Parent%20Guide%20_%20Follow%20the%20Money%20Rules!.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-users" style={{ fontSize: '2.5rem', color: '#ffb74d' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Parent Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Tips for discussion</span>
                        </div>
                    </a>

                    {/* Family Activity Guide */}
                    <a href="/assets/pdfs/Bedtime%20_%20Family%20Activity%20Guide%20_%20Follow%20the%20Money%20Rules!.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-puzzle-piece" style={{ fontSize: '2.5rem', color: '#ba68c8' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Family Activity Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Fun offline games</span>
                        </div>
                    </a>

                    {/* Teacher Guide */}
                    <a href="/assets/pdfs/Bedtime%20_%20Teacher%20Lesson%20Plan%20_%20Follow%20the%20Money%20Rules!.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', border: '2px solid #ddd', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-dark)' }}>
                        <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem', color: '#4db6ac' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>Teacher Guide</h4>
                            <span style={{ color: '#888', fontSize: '0.9rem' }}>Comprehensive lesson plan</span>
                        </div>
                    </a>

                </div>

                {/* Games Hub Integration */}
                <div style={{ marginTop: '50px', background: '#fff3e0', padding: '40px', borderRadius: '24px', textAlign: 'center', border: '3px dashed #ffb74d' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '15px' }}>Want more?</h3>
                    <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '25px' }}>Play games that reinforce these money lessons and make learning fun!</p>
                    <Link href="/games" className="btn btn-pill" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        padding: '15px 40px',
                        backgroundColor: '#ffb74d',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '1.4rem'
                    }}>
                        <i className="fas fa-gamepad" style={{ fontSize: '1.8rem' }}></i>
                        Play Games!
                    </Link>
                </div>

            </div>
        </main>
    );
}
