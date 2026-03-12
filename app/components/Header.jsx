'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <>
            <header className="header-area">
                <div className="container header-top">
                    <div className="header-left">
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <img src="/assets/images/logo.png" alt="Bedtime Money Habits Logo" style={{ maxHeight: '80px', objectFit: 'contain' }} />
                        </Link>
                    </div>

                    <div className="header-right">
                        <button className="search-icon" aria-label="Search">
                            <i className="fas fa-search"></i>
                        </button>
                        <div className="auth-buttons" style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '15px' }}>
                            {session ? (
                                <>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', display: 'none' }} className="user-name-display">{session.user?.name}</span>
                                    <button onClick={() => signOut()} className="btn btn-sharp" style={{ padding: '8px 15px', fontSize: '0.9rem', background: 'white', color: 'var(--accent-color)', border: '2px solid var(--accent-color)' }}>Sign Out</button>
                                </>
                            ) : (
                                <Link href="/login" className="btn btn-sharp" style={{ padding: '8px 15px', fontSize: '0.9rem', background: 'white', color: 'var(--accent-color)', border: '2px solid var(--accent-color)' }}>Log In</Link>
                            )}
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
                        <li><Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link></li>
                        <li><Link href="/parents" className={`nav-link ${pathname === '/parents' ? 'active' : ''}`}>Parents</Link></li>
                        <li><Link href="/teachers" className={`nav-link ${pathname === '/teachers' ? 'active' : ''}`}>Teachers</Link></li>
                        <li><Link href="/membership-features" className={`nav-link ${pathname === '/membership-features' ? 'active' : ''}`}>Membership Features</Link></li>
                        <li><Link href="/free-trial" className={`nav-link ${pathname === '/free-trial' ? 'active' : ''}`} style={{ fontWeight: 'bold' }}>Join Beta</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
