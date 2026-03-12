export default function AffiliatePartnersPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '4px solid var(--accent-color)' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Affiliate Partners</h1>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                    We are currently in the Beta phase of this new platform, but we are now accepting applications for Affiliate Partners in anticipation of our official launch.
                </p>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                    If you believe in helping children build strong money habits and lifelong financial well-being, we invite you to join us early. By signing up now, you'll have the opportunity to help us shape an extraordinary Affiliate Partner program designed to bring engaging songs, stories, and resources to families, classrooms, and communities around the world.
                </p>

                <div style={{ border: '4px dotted var(--accent-color)', padding: '20px', borderRadius: '16px', margin: '30px 0', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-dark)', textAlign: 'center' }}>
                    Apply today and be part of a growing movement dedicated to helping children develop the habits, confidence, and self-sufficiency they need to achieve their dreams and goals!
                </div>
            </div>
        </main>
    );
}
