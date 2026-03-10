export default function InquiriesPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Inquiries</h1>

                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px' }}>How can we help?</h3>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
                    We'd love to hear from you. If you have questions, feedback, partnership inquiries, or media requests, please contact us at:
                </p>

                <div style={{ background: 'var(--primary-bg)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', marginBottom: '30px' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', margin: 0, fontWeight: 'bold' }}>
                        Sam X Renick | <a href="mailto:savingsammy@gmail.com" style={{ color: 'var(--accent-color)' }}>savingsammy@gmail.com</a>
                    </p>
                </div>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                    We do our best to respond as quickly as possible.
                </p>
            </div>
        </main>
    );
}
