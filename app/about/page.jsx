import FAQAccordion from '../components/FAQAccordion';

export default function AboutPage() {
    return (
        <main style={{ padding: '80px 20px', minHeight: '100vh', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', fontSize: '1.25rem', color: '#666', lineHeight: '1.8' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '30px', fontWeight: 900, textAlign: 'center' }}>About Us</h2>

                <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '40px', marginBottom: '20px', fontWeight: 800 }}>BedtimeMoneyHabits.com</h3>
                <p style={{ marginBottom: '20px' }}>
                    Financial literacy is a gift that lasts a lifetime.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    BedtimeMoneyHabits.com provides families, educators, and organizations with heartwarming songs, stories, and conversation starters that make teaching money habits feel natural and enjoyable.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Through these engaging resources, children ages 3 and up begin discovering the joy of developing good money habits and making thoughtful money choices. Along the way, parents, teachers, and community leaders help lay the groundwork for a future of confidence, independence, and success.
                </p>

                <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '40px', marginBottom: '20px', fontWeight: 800 }}>Our Mission</h3>
                <p style={{ marginBottom: '20px' }}>
                    BedtimeMoneyHabits.com was created to empower parents, teachers, and community leaders with the tools to make financial education simple and engaging at home, in the classroom, in a car, anywhere and anytime there is a moment in the day to share a meaningful thought about money. We believe that by starting early, we can transform 'money talk' into a fun experience, a regular habit that prepares every child to grow up confident, capable, and ready for the world.
                </p>

                <h3 id="meet-the-creator" style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '40px', marginBottom: '20px', fontWeight: 800 }}>Meet the Creator: Sam X Renick</h3>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '30px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <p style={{ marginBottom: '20px' }}>
                            Sam X Renick is the creator of BedtimeMoneyHabits.com and SammyRabbit.com. An award-winning financial educator and children's author, Sam brings more than 25 years of expertise helping kids and families build essential money habits.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            His programs weave together storybooks, music, dream-big journaling, games, live events, and more — and they've been embraced by families and organizations worldwide, including the Department of Defense, United Way, the University of Texas at Tyler, Girl Scouts of America, the Wisconsin Bankers Association, Citi, banks, credit unions, and schools across the country.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            Sam's insights have been featured in the New York Times, Washington Post, NPR, Kiplinger, Forbes, KNX, and beyond. His sustained impact in the field has earned him numerous honors, including the New Jersey Financial Education Coalition Lifetime Achievement Award, the National Financial Educators Council Educator of the Year Award, and the California Jump$tart Coalition Leaders in Financial Literacy Award.
                        </p>
                        <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                            <a href="https://samxrenick.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>See Sam's Track Record →</a>
                        </p>
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                            <img src="/assets/images/pr.kiplinger.png" alt="Featured in Kiplinger, Forbes, NYT, NPR, Washington Post" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                        </div>
                    </div>
                    <div style={{ flex: '0 0 auto', textAlign: 'center', alignSelf: 'flex-start' }}>
                        <img src="/assets/images/samxrenick.award.jpg" alt="Sam X Renick" style={{ maxWidth: '200px', height: 'auto', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>

                <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '40px', marginBottom: '20px', fontWeight: 800 }}>Our Inspiration and Partner: Sammy Rabbit</h3>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '30px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <p style={{ marginBottom: '20px' }}>
                            Our work is deeply inspired by—and closely aligned with—Sammy Rabbit, a global leader in early-age financial education. While we are a distinct enterprise, we share a heart for helping children develop the self-sufficiency and habits that lead to a bright financial future.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            Sammy Rabbit’s decades of experience in creating positive, habit-focused songs and stories provide a powerful foundation for families and educators everywhere. We encourage you to visit SammyRabbit.com to explore their extensive collection of books, activities, and standards-based resources.
                        </p>
                    </div>
                    <div style={{ flex: '0 0 auto', textAlign: 'center', alignSelf: 'center' }}>
                        <img src="/assets/images/sammy-logo.png" alt="Sammy Rabbit Logo" style={{ maxWidth: '200px', height: 'auto' }} />
                    </div>
                </div>

                <h2 id="faq" style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginTop: '60px', marginBottom: '30px', fontWeight: 900, textAlign: 'center' }}>Frequently Asked Questions</h2>

                <FAQAccordion />

            </div>
        </main>
    );
}
