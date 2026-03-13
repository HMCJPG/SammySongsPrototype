import FAQAccordion from '../components/FAQAccordion';

export default function AboutPage() {
    return (
        <main style={{ padding: '80px 20px', minHeight: '100vh', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', fontSize: '1.25rem', color: '#666', lineHeight: '1.8' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '30px', fontWeight: 900, textAlign: 'center' }}>About Us</h2>

                <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '40px', marginBottom: '20px', fontWeight: 800 }}>BedtimeMoneyHabits.com</h3>
                <p style={{ marginBottom: '20px' }}>
                    Financial literacy is a gift that lasts a lifetime. We provide families and organizations with heartwarming songs, stories, and conversation starters that make teaching money habits feel natural. By helping children ages 3 and up discover the joy of saving, we lay the groundwork for a future of independence and success.
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

                <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginTop: '60px', marginBottom: '30px', fontWeight: 900, textAlign: 'center' }}>How It Works</h2>
                <p style={{ marginBottom: '20px' }}>
                    Teaching a three-year-old about money isn't about spreadsheets or interest rates — it's about building the right foundations at the right time. Research shows that core money habits are largely formed by age seven. Our strategy is designed to reach children during this "Golden Window" using the tools they naturally love: music, stories, and play.
                </p>
                <p style={{ marginBottom: '30px', fontWeight: 'bold' }}>
                    We follow a simple, proven four-step cycle: Sing. Read. Discuss. Reinforce.
                </p>

                <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '20px', border: '4px solid var(--accent-color)' }}>
                    <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 700 }}>Step 1 — Sing: A Sticky Start</h4>
                    <p style={{ marginBottom: '15px' }}>
                        Music is a habit-building superpower. Unlike a lecture, a song can be repeated dozens of times without losing its magic.
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>The Goal:</strong> Plant "sticky" financial vocabulary — like Earn, Save, Spend, and Give — into a child's long-term memory.
                    </p>
                    <p>
                        <strong>The Outcome:</strong> When a child hums "Follow the Money Rules," they aren't just singing. They're internalizing a lifelong financial formula.
                    </p>
                </div>

                <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '20px', border: '4px solid var(--accent-color)' }}>
                    <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 700 }}>Step 2 — Read: Context and Character</h4>
                    <p style={{ marginBottom: '15px' }}>
                        Stories take abstract ideas and make them human. Through the short stories that accompany each song, children see money as a tool for solving problems, achieving goals, and chasing dreams.
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>The Goal:</strong> Build emotional intelligence around money.
                    </p>
                    <p>
                        <strong>The Outcome:</strong> Children stop seeing money as "magic plastic" and start understanding it as the result of effort — and a path to something meaningful.
                    </p>
                </div>

                <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '20px', border: '4px solid var(--accent-color)' }}>
                    <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 700 }}>Step 3 — Discuss: Making Money a Safe Topic</h4>
                    <p style={{ marginBottom: '15px' }}>
                        Money is often a taboo topic at home, which can create anxiety that lasts well into adulthood. We give parents and teachers simple prompts and conversation starters to break the ice.
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>The Goal:</strong> Make money a safe, curious, and open topic of conversation.
                    </p>
                    <p>
                        <strong>The Outcome:</strong> When a child answers a question like "What's something you'd like to save for?" they're practicing one of the most important financial skills of all: intentionality.
                    </p>
                </div>

                <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '40px', border: '4px solid var(--accent-color)' }}>
                    <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 700 }}>Step 4 — Reinforce: Learning by Doing</h4>
                    <p style={{ marginBottom: '15px' }}>
                        This is where transformation happens. Our resources are habit-centered by design.
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>The Goal:</strong> Move from understanding to muscle memory.
                    </p>
                    <p>
                        <strong>The Outcome:</strong> Through small, consistent actions — like dropping a coin in a jar or choosing between two snacks — children build the "waiting muscle" (delayed gratification) that research links to long-term success.
                    </p>
                </div>

                <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '40px', marginBottom: '20px', fontWeight: 800 }}>Why It Works: More Than Money</h3>
                <p style={{ marginBottom: '20px' }}>
                    Our approach isn't just about financial IQ — it's about building executive function skills that serve children for life. By working through these four steps, children naturally practice:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}><strong>Impulse control</strong> — pausing before acting</li>
                    <li style={{ marginBottom: '10px' }}><strong>Delayed gratification</strong> — valuing their future self</li>
                    <li style={{ marginBottom: '10px' }}><strong>Critical thinking</strong> — distinguishing between wants and needs</li>
                </ul>
                <p style={{ marginBottom: '40px', fontWeight: 'bold' }}>
                    You don't need to be a financial expert to give your child a head start. You just need to press play.
                </p>
            </div>
        </main>
    );
}
