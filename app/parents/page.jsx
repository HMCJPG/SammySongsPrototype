export default function ParentsPage() {
    return (
        <main style={{ padding: '80px 20px', minHeight: '100vh', textAlign: 'center', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '20px', fontWeight: 900 }}>Parents</h2>
                <div style={{ fontSize: '1.25rem', color: '#666', marginBottom: '50px', lineHeight: '1.8', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 800 }}>
                        Welcome to the Parents Section: Simple Habits, Lifelong Impact
                    </h3>
                    <p style={{ marginBottom: '20px' }}>
                        Building essential money habits should feel natural, not like a chore. Whether you have five minutes before bed or a quick moment in the car, our resources help you turn everyday interactions into meaningful learning opportunities.
                    </p>

                    <h4 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginTop: '30px', marginBottom: '15px', fontWeight: 700 }}>
                        What You’ll Find Inside Each Parent Guide:
                    </h4>

                    <div style={{ textAlign: 'center', margin: '30px 0' }}>
                        <img 
                            src="/assets/images/bedtime.parentguide.png" 
                            alt="Bedtime Parent Guide" 
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '4px solid var(--accent-color)' }} 
                        />
                    </div>

                    <h4 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginTop: '30px', marginBottom: '15px', fontWeight: 700 }}>
                        Any Moment is a Learning Moment
                    </h4>
                    <p style={{ marginBottom: '20px' }}>
                        While our name is BedtimeMoneyHabits.com, these tools are designed for your family’s unique rhythm. Use them after school, on a weekend morning, or during a quiet moment together to consistently reinforce foundational money habits like saving, investing, spending smart, and giving wisely.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Together, we’re laying the groundwork for a future of independence, self-sufficiency, and the power to turn big dreams into reality.
                    </p>
                </div>

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
