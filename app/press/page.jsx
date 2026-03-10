export default function PressPage() {
    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '4px solid #4CAF50' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>Press & Media Inquiries</h1>


                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '25px' }}>
                    We welcome inquiries from journalists, bloggers, podcasters, and media organizations interested in covering Bedtime Songs and Stories, the Sam X Renick financial education initiative, and our mission to help children build strong money habits early in life.
                </p>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '40px' }}>
                    Our team is available for interviews, commentary, guest articles, podcast appearances, and media collaborations related to topics such as early childhood financial education, building healthy money habits, and helping families and schools introduce children to saving, earning, smart spending, and giving.
                </p>

                <div style={{ background: 'var(--primary-bg)', padding: '30px', borderRadius: '16px', borderLeft: '6px solid var(--accent-color)', marginBottom: '40px' }}>
                    <h4 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: 0, marginBottom: '15px' }}>For press inquiries, interview requests, or media resources, please contact:</h4>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', margin: 0, fontWeight: 'bold' }}>
                        Sam X Renick at <a href="mailto:savingsammy@gmail.com" style={{ color: 'var(--accent-color)' }}>savingsammy@gmail.com</a>
                    </p>
                </div>

                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', fontWeight: 'bold', textAlign: 'center' }}>
                    We look forward to working with you to help spread the message about the importance of teaching children the habits that support lifelong financial well-being and self-sufficiency.
                </p>
            </div>
        </main>
    );
}
