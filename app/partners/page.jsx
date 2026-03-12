export default function PartnersPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '4px solid var(--accent-color)' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Partners & Sponsors</h1>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                    We are currently in the Beta phase of this new platform and are actively building relationships with organizations and individuals who share our mission of helping children develop strong money habits early in life.
                </p>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                    We welcome conversations with sponsors, philanthropic partners, foundations, financial institutions, and mission-aligned investors who want to help expand access to engaging financial education resources for families, schools, and communities.
                </p>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                    If you are interested in supporting or partnering with us as we grow Bedtime Songs and Stories, we would love to connect.
                </p>
                <div style={{ border: '4px dotted var(--accent-color)', padding: '20px', borderRadius: '16px', margin: '30px 0', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-dark)', textAlign: 'center' }}>
                    Together we can help more children build the habits, confidence, financial well-being, and self-sufficiency they need to achieve their dreams and goals.
                </div>
            </div>
        </main>
    );
}
