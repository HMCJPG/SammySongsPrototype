export default function CopyrightPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '30px' }}>Copyright & Educational Use Policy</h1>

                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                    All songs, stories, lesson plans, guides, graphics, and educational materials provided on Bedtime Songs and Stories are protected by copyright and intellectual property laws. These materials are created to support financial education for children and may be used within the following guidelines.
                </p>

                <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '15px' }}>Permitted Educational Use</h2>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '15px' }}>Parents, teachers, and community organizations may:</p>
                <ul style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '30px', paddingLeft: '20px' }}>
                    <li>read or display stories for children</li>
                    <li>play songs for educational purposes</li>
                    <li>use lesson plans in classrooms or learning environments</li>
                    <li>print materials for personal or classroom use</li>
                    <li>discuss and teach the concepts presented in the materials</li>
                </ul>

                <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '15px' }}>Prohibited Uses</h2>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '15px' }}>Without written permission, users may not:</p>
                <ul style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '30px', paddingLeft: '20px' }}>
                    <li>reproduce or republish materials publicly</li>
                    <li>sell or commercially distribute content</li>
                    <li>upload songs, videos, or stories to other platforms</li>
                    <li>modify or create derivative works based on the materials</li>
                    <li>remove copyright notices or branding</li>
                </ul>

                <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '15px' }}>Sharing Materials</h2>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                    We encourage sharing the ideas and lessons presented in our resources.<br />
                    However, when referencing our materials, please credit:<br />
                    <strong>SammyRabbit.com</strong>
                </p>

                <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '15px' }}>Licensing and Partnerships</h2>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '15px' }}>Organizations interested in:</p>
                <ul style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '15px', paddingLeft: '20px' }}>
                    <li>licensing content</li>
                    <li>co-branding materials</li>
                    <li>distributing resources</li>
                    <li>partnering on educational initiatives</li>
                </ul>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>may contact us for partnership opportunities.</p>

                <div style={{ padding: '20px', background: 'var(--primary-bg)', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '10px' }}>Copyright Notice</h3>
                    <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>
                        &copy; {new Date().getFullYear()} Sammy Rabbit / SammyRabbit.com<br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </main>
    );
}
