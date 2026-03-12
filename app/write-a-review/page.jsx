export default function ReviewPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '4px solid var(--accent-color)' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Write a Review</h1>

                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '30px' }}>Tell us what you and your kids think!</h3>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
                    Your feedback helps us improve Bedtime Songs and Stories and create even better resources for families, teachers, and communities. If you and your children have listened to a song, read a story, or used one of the activities, we would love to hear about your experience.
                </p>

                <div style={{ background: 'var(--primary-bg)', padding: '30px', borderRadius: '16px', border: '2px solid var(--accent-color)', marginBottom: '30px' }}>
                    <ul style={{ fontSize: '1.2rem', color: 'var(--text-dark)', lineHeight: '1.8', margin: 0, paddingLeft: '20px', fontWeight: 'bold' }}>
                        <li style={{ marginBottom: '10px' }}>What did your kids enjoy most?</li>
                        <li style={{ marginBottom: '10px' }}>What stood out to you?</li>
                        <li>What should we add or improve?</li>
                    </ul>
                </div>

                <div style={{ border: '4px dotted var(--accent-color)', padding: '20px', borderRadius: '16px', margin: '30px 0', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-dark)', textAlign: 'center' }}>
                    Your review helps us make the platform more engaging, effective, and helpful for children everywhere as they begin building strong money habits and financial confidence.
                </div>

                <div style={{ textAlign: 'center' }}>
                    <a href="mailto:savingsammy@gmail.com?subject=Review%20of%20Bedtime%20Songs%20and%20Stories" className="btn btn-sharp" style={{ fontSize: '1.2rem', display: 'inline-block', textDecoration: 'none', padding: '15px 30px' }}>
                        <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i> Email Us Your Review
                    </a>
                </div>
            </div>
        </main>
    );
}
