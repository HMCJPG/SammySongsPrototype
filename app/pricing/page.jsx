'use client';

import Link from 'next/link';

export default function PricingPage() {
    return (
        <main className="pricing-page" style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--text-dark)', marginBottom: '15px', fontWeight: 900 }}>
                        Simple, Transparent Pricing
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#666' }}>
                        Give your children the gift of financial literacy. Choose the plan that works for you!
                    </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>

                    {/* Monthly Tier */}
                    <div style={{ flex: '1 1 350px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', border: '2px solid #ddd' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--text-dark)' }}>Monthly Plan</h3>
                        <p style={{ color: '#666', marginBottom: '30px' }}>Perfect for dipping your toes in.</p>

                        <div style={{ marginBottom: '30px' }}>
                            <span style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent-color)' }}>$5</span>
                            <span style={{ fontSize: '1.25rem', color: '#888' }}>/month</span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> Unlimited access to all songs</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> Unlimited story flipbooks</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> Printable Parent & Teacher Guides</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> Family Activity Packs</li>
                        </ul>

                        <Link href="/free-trial" className="btn btn-pill" style={{ display: 'block', width: '100%' }}>
                            Get Started
                        </Link>
                    </div>

                    {/* Yearly Tier */}
                    <div style={{ flex: '1 1 350px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', textAlign: 'center', border: '4px solid var(--accent-color)', position: 'relative' }}>

                        <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-color)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            Best Value
                        </div>

                        <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--text-dark)' }}>Annual Plan</h3>
                        <p style={{ color: '#666', marginBottom: '30px' }}>Save money and commit to learning.</p>

                        <div style={{ marginBottom: '30px' }}>
                            <span style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent-color)' }}>$50</span>
                            <span style={{ fontSize: '1.25rem', color: '#888' }}>/year</span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> <strong>2 Months Free! ($10 savings)</strong></li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> Unlimited access to all songs</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> Unlimited story flipbooks</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check" style={{ color: '#4caf50' }}></i> Printable Parent & Teacher Guides</li>
                        </ul>

                        <Link href="/free-trial" className="btn btn-pill" style={{ display: 'block', width: '100%' }}>
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
