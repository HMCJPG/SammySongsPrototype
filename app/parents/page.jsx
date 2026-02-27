export default function ParentsPage() {
    return (
        <main style={{ padding: '80px 20px', minHeight: '100vh', textAlign: 'center', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '20px', fontWeight: 900 }}>Parents</h2>
                <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '50px', lineHeight: '1.6' }}>
                    This sub-section of Bedtime Songs and Stories is coming soon! Check back later for more exciting activities and learning materials.
                </p>

                <div style={{ background: 'white', padding: '50px', borderRadius: '24px', border: '4px dashed var(--accent-color)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                    <i className="fas fa-file-pdf" style={{ fontSize: '5rem', color: 'var(--accent-color)', marginBottom: '20px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '15px', fontWeight: 800 }}>Sample Worksheet PDF</h3>
                    <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
                        We've included a blank placeholder PDF here to demonstrate where the downloadable activity documents will be listed!
                    </p>
                    <a href="/assets/pdfs/sample-activity.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-pill" style={{ display: 'inline-block', textDecoration: 'none' }}>
                        Download PDF
                    </a>
                </div>
            </div>
        </main>
    );
}
