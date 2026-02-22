import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h4 className="footer-title">Educational Tools</h4>
                    <ul className="footer-links">
                        <li><Link href="#">Learning Library</Link></li>
                        <li><Link href="#">Worksheets</Link></li>
                        <li><Link href="#">Games</Link></li>
                        <li><Link href="#">Interactive Worksheets</Link></li>
                        <li><Link href="#">Worksheet Generator</Link></li>
                        <li><Link href="#">Lesson Plans</Link></li>
                        <li><Link href="#">Common Core Resources</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Support</h4>
                    <ul className="footer-links">
                        <li><Link href="#">Help center</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                        <li><Link href="#">Education.com For Schools</Link></li>
                        <li><Link href="#">Get a Quote</Link></li>
                        <li><Link href="#">Give Gift</Link></li>
                        <li><Link href="#">Redeem Gift</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Connect</h4>
                    <ul className="footer-links">
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Tell us what you think</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">About</h4>
                    <ul className="footer-links">
                        <li><Link href="#">Company</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Affiliate Program</Link></li>
                        <li><Link href="#">Press</Link></li>
                        <li><Link href="#">Reviews</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">COPPA Privacy Policy</Link></li>
                        <li><Link href="#">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
