import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h4 className="footer-title">Partner Resources</h4>
                    <ul className="footer-links">
                        <li><Link href="https://sammyrabbit.com/categories/lesson-plans-standard-aligned-financial-literacy" target="_blank" rel="noopener noreferrer">Sammy Rabbit Classroom Lesson Plans</Link></li>
                        <li><Link href="https://sammyrabbit.com/blog/kids-money-dictionary-a-z-alphabetical-list-of-money-terms-1" target="_blank" rel="noopener noreferrer">Sammy Rabbit Kid Friendly Dictionary</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Connect</h4>
                    <ul className="footer-links">
                        <li><Link href="/inquiries">Inquiries</Link></li>
                        <li><Link href="/write-a-review">Write a Review</Link></li>
                        <li><Link href="/press">Press & Media Inquiries</Link></li>
                    </ul>
                </div>
                <div className="footer-col" style={{ flex: 1, minWidth: '200px' }}>
                    <h4 className="footer-title">About</h4>
                    <ul className="footer-links">
                        <li><Link href="/about-bedtime">Bedtime Songs and Stories</Link></li>
                        <li><Link href="/beta">Beta</Link></li>
                        <li><Link href="/copyright">Copyright and Educational Use Policy</Link></li>
                        <li><Link href="#">Frequently Asked Questions (FAQ)</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/affiliates">Affiliate Partners</Link></li>
                        <li><Link href="/partners">Partners and Sponsors</Link></li>
                        <li><Link href="/special-offers">Special Offers</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #777', marginTop: '40px', color: '#eee', fontSize: '0.95rem', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '10px' }}>Bedtime Songs and Stories is a new initiative created by Sam X Renick, founder of the Sammy Rabbit financial education programs.</p>
                <p>Copyright &copy; 2026 | Sam X Renick | All Rights Reserved</p>
            </div>
        </footer>
    );
}
