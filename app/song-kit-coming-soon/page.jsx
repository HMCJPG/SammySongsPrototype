import Link from 'next/link';

export default function SongKitComingSoonPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <i className="fas fa-hammer" style={{ fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '20px' }}></i>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Song Kit Coming Soon!</h1>
                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
                    We are currently hard at work building the educational resources and activities for this song. Please check back soon!
                </p>
                <Link href="/" className="btn btn-sharp" style={{ fontSize: '1.2rem', display: 'inline-block', textDecoration: 'none' }}>
                    Return to Home
                </Link>
            </div>
        </main>
    );
}
