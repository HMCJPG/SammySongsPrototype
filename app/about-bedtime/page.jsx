export default function AboutBedtimePage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Bedtime Songs and Stories</h1>
                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                    Designed for parents, teachers, and community organizations who want simple, engaging resources to help children ages 3 and up build strong money habits. Through songs, stories, and conversations, kids begin developing the habits and mindsets that support lifelong financial well-being, self-sufficiency, and the ability to turn dreams and goals into reality.
                </p>
            </div>
        </main>
    );
}
