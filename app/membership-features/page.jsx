'use client';

import Link from 'next/link';

export default function EarlyAccessPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--primary-bg)', minHeight: '80vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <div className="container" style={{ maxWidth: '900px', background: 'white', padding: '60px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', borderTop: '8px solid var(--accent-color)' }}>

                <h1 style={{ fontSize: '3.5rem', color: 'var(--text-dark)', marginBottom: '20px', textAlign: 'center', fontWeight: 900 }}>
                    Join Beta
                </h1>

                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '25px', fontWeight: 800 }}>
                        Beta Access and Early Supporter Rewards
                    </h2>
                    
                    <div style={{ border: '4px dotted var(--accent-color)', borderRadius: '16px', padding: '25px', marginBottom: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.35rem', color: 'var(--text-dark)', fontWeight: 'bold', margin: 0, lineHeight: '1.5' }}>
                            During the Beta phase, access to BedtimeMoneyHabits.com is free while we test, refine, and improve the platform!
                        </p>
                    </div>

                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px', lineHeight: '1.7' }}>
                        Beta participants receive early access to the site and the opportunity to help shape its development. As a thank you for being early supporters, Beta participants may also be eligible for special early supporter pricing when the platform officially launches.
                    </p>

                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0', lineHeight: '1.7' }}>
                        When the platform officially launches, we plan to offer simple and affordable subscription options for families, teachers, and organizations.
                    </p>
                </div>

                <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '20px', fontWeight: 800 }}>
                    What to Expect at Launch (Post-Beta Vision): BedtimeMoneyHabits membership
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '15px', lineHeight: '1.7' }}>
                    A complete BedtimeMoneyHabits.com experience designed to help children build lifelong money habits through music, stories, and simple conversations.
                </p>
                <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px', lineHeight: '1.7' }}>
                    Every week members receive a new set of engaging resources that make learning about money easy and fun for kids — and simple for parents and teachers to use.
                </p>

                <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '16px', marginBottom: '30px', borderLeft: '6px solid var(--accent-color)' }}>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', margin: '0 0 15px 0', fontWeight: 800 }}>A New Money Habit Song</h3>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: '0 0 15px 0', lineHeight: '1.7' }}>
                        Catchy songs children love that teach powerful money habits like saving, earning, spending smart, and giving wisely.
                    </p>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: '0 0 10px 0', fontWeight: 'bold' }}>Includes:</p>
                    <ul style={{ fontSize: '1.15rem', color: '#666', margin: 0, lineHeight: '1.7', listStyleType: 'disc', paddingLeft: '40px' }}>
                        <li>Karaoke video</li>
                        <li>Audio song file</li>
                        <li>Downloadable lyric sheet</li>
                    </ul>
                </div>

                <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '16px', marginBottom: '30px', borderLeft: '6px solid var(--accent-color)' }}>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', margin: '0 0 15px 0', fontWeight: 800 }}>A Short Story That Reinforces the Lesson</h3>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: '0 0 15px 0', lineHeight: '1.7' }}>
                        Each song is paired with a short story that helps children understand the habit through characters and storytelling.
                    </p>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: '0 0 10px 0', fontWeight: 'bold' }}>Includes:</p>
                    <ul style={{ fontSize: '1.15rem', color: '#666', margin: 0, lineHeight: '1.7', listStyleType: 'disc', paddingLeft: '40px' }}>
                        <li>Interactive digital storybook (flipbook)</li>
                        <li>Printable PDF storybook</li>
                    </ul>
                </div>

                <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '16px', marginBottom: '30px', borderLeft: '6px solid var(--accent-color)' }}>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', margin: '0 0 15px 0', fontWeight: 800 }}>Parent, Family & Teacher Guides</h3>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: '0 0 15px 0', lineHeight: '1.7' }}>
                        Simple guides that help turn songs and stories into meaningful conversations and learning experiences.
                    </p>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: '0 0 10px 0', fontWeight: 'bold' }}>Includes:</p>
                    <ul style={{ fontSize: '1.15rem', color: '#666', margin: 0, lineHeight: '1.7', listStyleType: 'disc', paddingLeft: '40px' }}>
                        <li>Parent Guide with conversation starters and tips</li>
                        <li>Family Activity Guide with experiences and activities</li>
                        <li>Teacher Guide with standards-aligned lesson plans</li>
                    </ul>
                </div>

                <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '16px', marginBottom: '40px', borderLeft: '6px solid var(--accent-color)' }}>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', margin: '0 0 15px 0', fontWeight: 800 }}>Games & Activities</h3>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: '0 0 15px 0', lineHeight: '1.7' }}>
                        Fun hands-on games and activities that help children practice the money habits they are learning.
                    </p>
                    <p style={{ fontSize: '1.15rem', color: '#666', margin: 0, lineHeight: '1.7' }}>
                        Children learn best by doing — these activities reinforce each week’s lesson in memorable ways.
                    </p>
                </div>

                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '15px', fontWeight: 800 }}>Designed for Families, Classrooms, and Anytime Learning</h3>
                <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '15px', lineHeight: '1.7' }}>
                    Although the program is called BedtimeMoneyHabits.com, the resources can be used anytime — at home, in the classroom, or on the go.
                </p>
                <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '50px', lineHeight: '1.7' }}>
                    Just a few minutes a day listening, reading, talking, and doing activities can help children build confident money habits that last a lifetime.
                </p>

                <div style={{ background: 'var(--primary-bg)', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', border: '2px dashed var(--accent-color)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', margin: 0, fontWeight: 900, lineHeight: '1.4' }}>
                        The Only Children's Program That Teaches Money Habits Through Songs, Stories, and Conversations!
                    </h3>
                </div>

            </div>
        </main>
    );
}
