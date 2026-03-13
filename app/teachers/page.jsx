export default function TeachersPage() {
    return (
        <main style={{ padding: '80px 20px', minHeight: '100vh', textAlign: 'center', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '20px', fontWeight: 900 }}>Teachers</h2>

                <div style={{ fontSize: '1.25rem', color: '#666', marginBottom: '50px', lineHeight: '1.8', textAlign: 'left' }}>
                    <p>
                        Welcome to the <strong>Teacher Resources section</strong> — designed to support you anytime, anywhere, whether you’re in the classroom, teaching remotely, or planning lessons at home. Each song and story in our collection is paired with a thoughtfully crafted, standards-aligned lesson plan that connects music and storytelling with meaningful learning outcomes. These ready-to-use resources make it easy to engage students, meet curriculum goals, and bring financial concepts to life in ways that fit your schedule and teaching style.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        Our lesson plans are designed to help teachers introduce financial concepts in engaging, age-appropriate ways while reinforcing critical thinking, discussion, and real-world connections.
                    </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <a href="/song-kit/follow-the-money-rules#download-resources" className="btn btn-pill" style={{ display: 'inline-block', fontSize: '1.5rem', padding: '15px 40px', textDecoration: 'none' }}>
                        See Guides
                    </a>
                </div>
            </div>
        </main>
    );
}
