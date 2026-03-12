export default function SpecialOffersPage() {
    return (
        <main style={{ padding: '80px 20px', minHeight: '100vh', textAlign: 'center', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '20px', fontWeight: 900 }}>Special Offers</h2>
                <div style={{ fontSize: '1.25rem', color: '#666', marginBottom: '50px', lineHeight: '1.8', textAlign: 'left' }}>
                    <p style={{ marginBottom: '20px' }}>
                        During the Beta phase, we are offering a limited number of Early Supporter memberships for families, teachers, schools, and organizations who would like to subscribe and secure access to BedtimeMoneyHabits.com in advance of the official launch. This initiative, created by Sam X Renick, is designed to help young children build strong money habits through engaging songs, stories, and conversations.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        While the program complements and supports the broader financial education work of Sammy Rabbit, it is a new initiative focused on helping families and educators easily introduce these ideas to children. Early supporters help us test, refine, and improve the platform while expanding access to engaging resources that help children build lifelong financial well-being and self-sufficiency.
                    </p>

                    <div style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '4px solid var(--accent-color)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '20px', fontWeight: 800 }}>As a thank you for supporting the platform early, Beta participants who subscribe during this phase may receive:</h3>
                        <ul className="custom-bullets" style={{ paddingLeft: '20px', marginBottom: 0 }}>
                            <li style={{ marginBottom: '10px' }}>Early supporter pricing</li>
                            <li style={{ marginBottom: '10px' }}>Advance access to the platform</li>
                            <li style={{ marginBottom: '10px' }}>Special group and classroom membership opportunities</li>
                            <li style={{ marginBottom: 0 }}>Organizational and community partnership options</li>
                        </ul>
                    </div>

                    <p style={{ marginBottom: '20px' }}>
                        These early access opportunities are available for a limited time during the Beta phase. If you are interested in providing access for multiple families, classrooms, or organizations, we would be happy to explore special arrangements.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Together we can help more children build the habits, confidence, financial well-being, and self-sufficiency they need to achieve their dreams and goals.
                    </p>

                    <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', background: 'var(--light-bg)', borderRadius: '24px', border: '2px dashed #ccc' }}>
                        <p style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-dark)', fontWeight: 'bold' }}>
                            For information about current offers, please contact:
                        </p>
                        <a href="mailto:savingsammy@gmail.com" style={{ fontSize: '1.5rem', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold' }}>
                            savingsammy@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
