'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className="header-area">
                <div className="container header-top">
                    <div className="header-left">
                        <Link href="/">
                            <img
                                src="/assets/images/pig_logo.png"
                                alt="Bedtime Songs and Stories Logo"
                                className="logo-placeholder"
                                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/50x50?text=BSS'; }}
                            />
                        </Link>
                        <div className="separator"></div>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <h1 className="brand-title">Bedtime Songs and Stories That Build Great Money Habits</h1>
                        </Link>
                    </div>

                    <div className="header-right">
                        <button className="search-icon" aria-label="Search">
                            <i className="fas fa-search"></i>
                        </button>
                        <div className="auth-buttons" style={{ display: 'none' }}>
                            {/* Buttons removed per request */}
                        </div>
                        <button
                            className="hamburger-menu"
                            aria-label="Menu"
                            style={{ display: 'none' }}
                            onClick={() => setNavOpen(!navOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </header>

            <nav className="main-nav">
                <div className="container">
                    <ul className={`nav-list ${navOpen ? 'show' : ''}`}>
                        <li><Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                        <li><Link href="/parents" className={`nav-link ${pathname === '/parents' ? 'active' : ''}`}>Parents</Link></li>
                        <li><Link href="/teachers" className={`nav-link ${pathname === '/teachers' ? 'active' : ''}`}>Teachers</Link></li>
                        <li><Link href="/pricing" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}>How to Join (Pricing)</Link></li>
                        <li><Link href="/free-trial" className={`nav-link ${pathname === '/free-trial' ? 'active' : ''}`} style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Free Trial</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
