export default function TeachersPage() {
    return (
        <main style={{ padding: '80px 20px', minHeight: '100vh', textAlign: 'center', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '20px', fontWeight: 900 }}>Teachers</h2>

                <div style={{ fontSize: '1.25rem', color: '#666', marginBottom: '50px', lineHeight: '1.8', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 800 }}>
                        Welcome to the Teacher Resources Section
                    </h3>
                    <p style={{ marginBottom: '20px' }}>
                        Designed to support you anytime and anywhere, our resources are built to fit your schedule—whether you’re in the classroom, teaching remotely, or planning lessons at home. Each song and story in our collection is paired with a thoughtfully crafted, standards-aligned lesson plan that connects music and storytelling with meaningful learning outcomes.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Our lesson plans are designed to help teachers introduce financial concepts in engaging, age-appropriate ways while reinforcing critical thinking, discussion, and real-world connections.
                    </p>

                    <div style={{ textAlign: 'center', margin: '30px 0' }}>
                        <img 
                            src="/assets/images/teachersection.png" 
                            alt="Teacher Resources Section" 
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '4px solid var(--accent-color)' }} 
                        />
                    </div>

                    <h4 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginTop: '30px', marginBottom: '15px', fontWeight: 700 }}>
                        In addition to these classroom tools, educators have full access to our complete library of parent resources, ensuring a seamless connection between school and home habits.
                    </h4>
                    <p style={{ marginBottom: '20px' }}>
                        These ready-to-use materials make it easy to engage students, meet curriculum goals, and bring financial concepts to life in ways that align perfectly with your unique teaching style.
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
