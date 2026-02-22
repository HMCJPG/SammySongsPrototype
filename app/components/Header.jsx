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
                                src="/assets/logo_placeholder.png"
                                alt="Sammy Rabbit Logo"
                                className="logo-placeholder"
                                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/50x50?text=SR'; }}
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
                        <div className="auth-buttons">
                            <button className="btn btn-sharp">Log in</button>
                            <button className="btn btn-sharp">Register</button>
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
                        <li><Link href="/listen-and-watch" className={`nav-link ${pathname === '/listen-and-watch' ? 'active' : ''}`}>Listen and watch</Link></li>
                        <li><Link href="/read-and-write" className={`nav-link ${pathname === '/read-and-write' ? 'active' : ''}`}>Read and write</Link></li>
                        <li><Link href="/speak-and-spell" className={`nav-link ${pathname === '/speak-and-spell' ? 'active' : ''}`}>Speak and spell</Link></li>
                        <li><Link href="/grammar-and-vocabulary" className={`nav-link ${pathname === '/grammar-and-vocabulary' ? 'active' : ''}`}>Grammar and vocabulary</Link></li>
                        <li><Link href="/fun-and-games" className={`nav-link ${pathname === '/fun-and-games' ? 'active' : ''}`}>Fun and games</Link></li>
                        <li><Link href="/parents" className={`nav-link ${pathname === '/parents' ? 'active' : ''}`}>Parents</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
