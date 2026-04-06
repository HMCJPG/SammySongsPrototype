import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer">
            {/* Brand Description Block */}
            <div className="container footer-brand-block">
                <div className="footer-brand-logo">
                    <img src="/assets/images/logo.png" alt="Bedtime Money Habits logo" style={{ maxHeight: '60px', objectFit: 'contain' }} />
                </div>
                <p className="footer-brand-text">
                    Financial education for kids starts with great routines.{' '}
                    <Link href="/" className="footer-brand-link">Bedtime Money Habits</Link>{' '}
                    is a unique children&apos;s program designed by Sam X Renick to build foundational, lifelong{' '}
                    <strong>Money Habits</strong>. Using{' '}
                    <strong>Songs, Stories, and Conversations</strong>, we teach children to Save, Earn, Spend Smart, Give Wisely, and Invest.
                    We transform everyday interactions into meaningful learning opportunities for children and families.
                </p>
            </div>

            {/* Three-Column Link Grid */}
            <div className="container footer-container">
                <div className="footer-col">
                    <h4 className="footer-title">Resources</h4>
                    <ul className="footer-links">
                        <li><Link href="/song-kit/follow-the-money-rules">Songs &amp; Stories</Link></li>
                        <li><Link href="/song-kit/follow-the-money-rules">Money Rules Guides</Link></li>
                        <li><Link href="/parents">Parent Resources</Link></li>
                        <li><Link href="/teachers">Teacher Resources</Link></li>
                        <li><a href="https://sammyrabbit.com/blog/kids-money-dictionary-a-z-alphabetical-list-of-money-terms-1" target="_blank" rel="noopener noreferrer">Sammy Rabbit Dictionary</a></li>
                        <li><a href="https://sammyrabbit.com/categories/lesson-plans-standard-aligned-financial-literacy" target="_blank" rel="noopener noreferrer">Sammy Rabbit Lessons</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Sitemap</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/parents">For Parents</Link></li>
                        <li><Link href="/teachers">For Teachers</Link></li>
                        <li><Link href="/membership-features">Join Beta</Link></li>
                        <li><Link href="/inquiries">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Legal</h4>
                    <ul className="footer-links">
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                        <li><Link href="/copyright">Copyright</Link></li>
                        <li><Link href="/special-offers">Special Offers</Link></li>
                        <li><Link href="/partners">Partners</Link></li>
                        <li><Link href="/about#faq">FAQ</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-copyright">
                <p>Copyright &copy; 2026 | Sam X Renick | All Rights Reserved</p>
            </div>
        </footer>
    );
}
