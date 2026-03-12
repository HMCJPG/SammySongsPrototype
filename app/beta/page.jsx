export default function BetaPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '4px solid var(--accent-color)' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Beta Access and Early Supporter Rewards</h1>

                <div style={{ border: '4px dotted var(--accent-color)', padding: '20px', borderRadius: '16px', margin: '30px 0', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-dark)', textAlign: 'center' }}>
                    During the Beta phase, access to BedtimeMoneyHabits.com is free while we test, refine, and improve the platform!
                </div>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                    Beta participants receive early access to the site and the opportunity to help shape its development. As a thank you for being early supporters, Beta participants may also be eligible for special early supporter pricing when the platform officially launches.
                </p>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                    When the platform officially launches, we plan to offer simple and affordable subscription options for families, teachers, and organizations.
                </p>
            </div>
        </main>
    );
}
