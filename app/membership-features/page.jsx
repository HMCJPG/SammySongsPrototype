'use client';

import Link from 'next/link';

export default function EarlyAccessPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--primary-bg)', minHeight: '80vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <div className="container" style={{ maxWidth: '900px', background: 'white', padding: '60px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', borderTop: '8px solid var(--accent-color)' }}>

                <h1 style={{ fontSize: '3.5rem', color: 'var(--text-dark)', marginBottom: '30px', textAlign: 'center', fontWeight: 900 }}>
                    Join BETA: Get Early Access
                </h1>

                <div style={{ marginBottom: '60px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px', lineHeight: '1.7' }}>
                        During our beta phase, families, teachers, and early supporters can explore everything on the site: the first Bedtime Money Habits songs, stories, and activity guides while we continue improving the platform.
                    </p>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: '1.7' }}>
                        Beta participants help us test features, share feedback, and shape the final experience.
                    </p>

                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '15px', fontWeight: 800 }}>During Beta You Can:</h3>
                    <ul style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: '1.7', paddingLeft: '40px' }}>
                        <li>Explore songs and karaoke lyric videos</li>
                        <li>Read the short bedtime story</li>
                        <li>Use Parent &amp; Family Activity Guides</li>
                        <li>Help us improve the experience with feedback</li>
                    </ul>

                    <div style={{ border: '4px dotted var(--accent-color)', borderRadius: '16px', padding: '25px', marginBottom: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.35rem', color: 'var(--text-dark)', fontWeight: 'bold', margin: 0, lineHeight: '1.5' }}>
                            Access during beta is free!
                        </p>
                    </div>

                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0', lineHeight: '1.7' }}>
                        And, as a thank you for helping us improve the platform, beta participants will also be eligible for special early-supporter pricing.
                    </p>
                </div>

                <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '25px', fontWeight: 800 }}>
                    What to Expect Post Beta - Official Launch
                </h2>
                
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px', lineHeight: '1.7' }}>
                    After the beta phase, Bedtime Money Habits will grow into a full learning experience and Membership site designed to help children build strong, positive money habits.
                </p>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px', lineHeight: '1.7' }}>
                    At launch, we plan to release new bedtime songs, stories, and supporting learning “kits” on a regular basis giving families and educators fresh resources each week to keep kids engaged and learning.
                </p>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: '1.7' }}>
                    We also plan to introduce simple, affordable membership options for families, teachers, and organizations that want ongoing access to the growing library of songs, stories, lesson plans, and activity guides.
                </p>
                
                <div style={{ background: '#f9f9f9', borderRadius: '16px', padding: '30px', borderLeft: '6px solid var(--accent-color)', marginBottom: '20px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#555', margin: 0, lineHeight: '1.7', fontWeight: 'bold' }}>
                        As a thank you for helping us improve the platform, beta participants will also be eligible for special early-supporter pricing.
                    </p>
                </div>

            </div>
        </main>
    );
}
