'use client';

import React, { useState } from 'react';

const FAQItem = ({ question, children, isOpen, onClick }) => {
    return (
        <div style={{
            borderBottom: '1px solid var(--border-color)',
            marginBottom: '10px',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
        }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)'
                }}
            >
                {question}
                <span style={{
                    fontSize: '1.5rem',
                    color: 'var(--accent-color)',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s ease'
                }}>
                    +
                </span>
            </button>
            <div style={{
                maxHeight: isOpen ? '2000px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.4s ease-in-out',
                padding: isOpen ? '0 20px 20px 20px' : '0 20px',
            }}>
                <div style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.7' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(-1); // All collapsed by default

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div style={{ marginTop: '30px', marginBottom: '50px' }}>
            <FAQItem
                question="Who Are These Resources For?"
                isOpen={openIndex === 0}
                onClick={() => toggleAccordion(0)}
            >
                <p style={{ marginBottom: '20px' }}>
                    These resources are designed for parents, teachers, caregivers, and anyone who wants to help children build life-changing money habits early. Our goal is simple: put kids on a path toward lifelong financial well-being (security, stability, independence, and opportunity) and position them to pursue their dreams and help others do the same.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    The resources are especially well-suited for children in grades K–3, when foundational habits are forming and repetition has its greatest impact.
                </p>
                <p style={{ marginBottom: '0' }}>
                    And while the collection is called BedtimeMoneyHabits.com, these resources are made to be used anytime, anywhere: at home, in the classroom, in after-school programs, or during family conversations. Wherever children are learning, strong money habits can take root.
                </p>
            </FAQItem>

            <FAQItem
                question="Why Does Teaching Financial Literacy Early Matter?"
                isOpen={openIndex === 1}
                onClick={() => toggleAccordion(1)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Teaching children about money matters more than most parents realize, because money habits start forming as early as age seven. In today's consumer-driven world, kids are constantly surrounded by messages that encourage spending, impulsiveness, and instant gratification, often long before they've learned about saving, budgeting, or waiting for something they really want.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    When parents intentionally build healthy money habits early, they give their children far more than financial knowledge. They give them confidence, independence, less stress, the ability to handle unexpected setbacks, freedom from living paycheck to paycheck, and the capacity to be generous with others.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Financial literacy isn't about raising little accountants. It's about building lifelong habits: understanding wants versus needs, saving consistently, spending intentionally, and preparing for the unexpected. Because most schools still offer limited financial education, these conversations often fall to parents.
                </p>
                <p style={{ marginBottom: '0' }}>
                    The good news? You don't need to be a financial expert. Simply starting open, consistent conversations about money helps shape a healthier, more confident future for your child.
                </p>
            </FAQItem>

            <FAQItem
                question="Why Start Teaching Money Habits So Early?"
                isOpen={openIndex === 2}
                onClick={() => toggleAccordion(2)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Because childhood is the most powerful window you'll ever have.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Research in behavioral science and neuroscience suggests that core money habits and attitudes are largely formed by age seven. During these early years, the brain is highly adaptable. Patterns repeated consistently, especially those tied to emotion and daily routine, become wired pathways. What children practice early begins to feel "normal." And what feels normal tends to last.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    This is why waiting until the teenage years to have serious money conversations often misses the mark. By then, spending impulses, emotional reactions, and behavioral patterns may already be well established. Early childhood, on the other hand, is still a shaping stage: habits are forming, scripts are being written, and defaults are being set.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    That's not a reason to worry. It's a reason to act with confidence.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    If you've ever thought, "Isn't my child too young to learn about money?" the research says the opposite. Early exposure doesn't mean complex lessons about investing or credit scores. It means simple, repeated experiences: saving a little, waiting before buying, talking calmly about choices, watching money grow toward a goal.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    These small moments add up.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    When children grow up hearing consistent messages about saving, earning, giving, and spending wisely, and when they practice those behaviors in simple, everyday ways, they build automatic patterns that carry into adulthood.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Starting early isn't about pressure. It's about protection and preparation.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    The earlier strong money habits form, the more time they have to strengthen, and the less likely your child is to struggle later trying to unlearn unhealthy ones.
                </p>
                <p style={{ marginBottom: '0', fontWeight: 'bold', fontStyle: 'italic' }}>
                    It's not too early. In fact, it's exactly the right time.
                </p>
            </FAQItem>

            <FAQItem
                question="Why Focus on Habits Rather Than Knowledge?"
                isOpen={openIndex === 3}
                onClick={() => toggleAccordion(3)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Most adults already know what they should do with money: save, avoid debt, spend less than they earn. Yet many still struggle. The gap isn't knowledge. It's habits.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Research and real-life experience show that lasting behavior change doesn't come from information alone. It comes from repetition, emotion, and early exposure. Habits form when actions are practiced consistently, tied to positive feelings, and built during the years when the brain is still developing. Once a habit is formed, it runs on autopilot with no willpower required.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    That's why our approach is different.
                </p>
                <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    We don't just teach money facts. We help children build money habits.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Through songs and stories, children experience repeated, emotionally positive messages about saving first, spending smart, waiting before buying, planning for the unexpected, and knowing where money goes. Music is especially powerful here. Rhythm and melody strengthen memory pathways in the brain, and studies show that information paired with music is retained longer and recalled more easily. Stories add emotional meaning, and emotion is what truly locks habits into place.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    When a child sings about saving, hears stories about waiting, and talks about money regularly with the people they love, they aren't just learning concepts. They're wiring patterns.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Over time, saving becomes automatic. Waiting becomes normal. Planning becomes second nature.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    The goal is not a child who knows about money, but a child who practices strong money habits without needing constant reminders.
                </p>
                <div style={{ border: '4px dotted var(--accent-color)', padding: '20px', borderRadius: '16px', margin: '30px 0', fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--text-dark)', textAlign: 'center' }}>
                    Knowledge informs. Habits transform.
                </div>
            </FAQItem>

            <FAQItem
                question="What Are Some of the Ideas Kids Will Explore and Learn About?"
                isOpen={openIndex === 4}
                onClick={() => toggleAccordion(4)}
            >
                <p style={{ marginBottom: '20px' }}>
                    At Bedtime Money Habits, kids have fun being introduced to the language of money through songs, stories, and simple conversations. Along the way, they begin learning important ideas about everyday money habits, like saving, earning, spending smart, and giving wisely. These early experiences help children understand that money is something they can think about, talk about, and use in positive ways.
                </p>
                <p style={{ marginBottom: '0' }}>
                    The goal isn’t for children to master every concept right away. Instead, it’s to spark curiosity, build confidence, and introduce the ideas that form the foundation of lifelong financial habits. As kids listen, sing, and talk about money with parents and teachers, they begin developing positive attitudes, healthy feelings, and strong habits that can guide them throughout life.
                </p>
            </FAQItem>

            <FAQItem
                question="How and Why Bedtimemoneyhabits Works?"
                isOpen={openIndex === 5}
                onClick={() => toggleAccordion(5)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Teaching a three-year-old about money isn't about spreadsheets or interest rates. It's about building the right foundations at the right time. Research shows that core money habits are largely formed by age seven. Our strategy is designed to reach children during this "Golden Window" using the tools they naturally love: music, stories, and play.
                </p>
                <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    We follow a simple, proven four-step cycle: Sing. Read. Discuss. Reinforce.
                </p>

                <p style={{ marginBottom: '10px', color: 'var(--accent-color)' }}><strong>Step 1. Sing: A Sticky Start</strong></p>
                <p style={{ marginBottom: '10px' }}>Music is a habit-building superpower. Unlike a lecture, a song can be repeated dozens of times without losing its magic.</p>
                <p style={{ marginBottom: '10px' }}><strong>The Goal:</strong> Plant "sticky" financial vocabulary, like Earn, Save, Spend, and Give, into a child's long-term memory.</p>
                <p style={{ marginBottom: '20px' }}><strong>The Outcome:</strong> When a child hums "Follow the Money Rules," they aren't just singing. They're internalizing a lifelong financial formula.</p>

                <p style={{ marginBottom: '10px', color: 'var(--accent-color)' }}><strong>Step 2. Read: Context and Character</strong></p>
                <p style={{ marginBottom: '10px' }}>Stories take abstract ideas and make them human. Through the short stories that accompany each song, children see money as a tool for solving problems, achieving goals, and chasing dreams.</p>
                <p style={{ marginBottom: '10px' }}><strong>The Goal:</strong> Build emotional intelligence around money.</p>
                <p style={{ marginBottom: '20px' }}><strong>The Outcome:</strong> Children stop seeing money as "magic plastic" and start understanding it as the result of effort and a path to something meaningful.</p>

                <p style={{ marginBottom: '10px', color: 'var(--accent-color)' }}><strong>Step 3. Discuss: Making Money a Safe Topic</strong></p>
                <p style={{ marginBottom: '10px' }}>Money is often a taboo topic at home, which can create anxiety that lasts well into adulthood. We give parents and teachers simple prompts and conversation starters to break the ice.</p>
                <p style={{ marginBottom: '10px' }}><strong>The Goal:</strong> Make money a safe, curious, and open topic of conversation.</p>
                <p style={{ marginBottom: '20px' }}><strong>The Outcome:</strong> When a child answers a question like "What's something you'd like to save for?" they're practicing one of the most important financial skills of all: intentionality.</p>

                <p style={{ marginBottom: '10px', color: 'var(--accent-color)' }}><strong>Step 4. Reinforce: Learning by Doing</strong></p>
                <p style={{ marginBottom: '10px' }}>This is where transformation happens. Our resources are habit-centered by design.</p>
                <p style={{ marginBottom: '10px' }}><strong>The Goal:</strong> Move from understanding to muscle memory.</p>
                <p style={{ marginBottom: '20px' }}><strong>The Outcome:</strong> Through small, consistent actions, like dropping a coin in a jar or choosing between two snacks, children build the "waiting muscle" (delayed gratification) that research links to long-term success.</p>

                <p style={{ marginBottom: '10px', color: 'var(--accent-color)' }}><strong>Why It Works: More Than Money</strong></p>
                <p style={{ marginBottom: '10px' }}>Our approach isn't just about financial IQ. It's about building executive function skills, feelings, attitudes, and habits that serve children for life. By working through these four steps, children naturally practice:</p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>Impulse control: pausing before acting</li>
                    <li style={{ marginBottom: '10px' }}>Delayed gratification: valuing their future self</li>
                    <li style={{ marginBottom: '10px' }}>Critical thinking: distinguishing between wants and needs</li>
                </ul>
                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>You don't need to be a financial expert to give your child a head start. You just need to press play.</p>
            </FAQItem>

            <FAQItem
                question="How Can Parents Use These Resources with Kids?"
                isOpen={openIndex === 6}
                onClick={() => toggleAccordion(6)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Parents can use the songs, stories, and activity guides in simple, natural ways that fit into everyday family life. Many families begin by listening to a song or reading a short story together, often at bedtime or at other convenient moments that work best for them. Parents can then ask a few of the conversation questions provided in the Parent Guides or any questions they feel are appropriate. These short discussions help children become comfortable hearing and using the language of money while connecting ideas like saving, earning, spending smart, and giving wisely to real life.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Parents can also use the activities as small family experiences that complement the Family Guide. For example, you might create a family “money dictionary,” start a simple saving jar for a goal, or talk about a recent purchase and whether it was a smart spending choice.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    The goal is not for children to master every concept right away, but to introduce the ideas, build a foundation, and help kids begin developing curiosity, confidence, and an interest in learning more about money as they grow.
                </p>
                <p style={{ marginBottom: '0' }}>
                    Even a few minutes at a time can make a difference. Over time, these small conversations and experiences help children develop positive attitudes and lifelong money habits.
                </p>
            </FAQItem>

            <FAQItem
                question="What Has Our 25+ Years of Teaching Kids About Money Shown Us?"
                isOpen={openIndex === 7}
                onClick={() => toggleAccordion(7)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Over the past 25+ years of teaching children about money, we’ve learned a few simple but powerful things.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    First, kids are naturally curious about money when the subject is introduced in a fun, positive, and age-appropriate way. Songs, stories, and conversations help children feel comfortable with the language of money and open the door for meaningful learning.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    We’ve also learned that habits matter more than complicated concepts. When children are introduced early to ideas like saving, earning, spending smart, and giving wisely, they begin forming attitudes and behaviors that can last a lifetime. Small ideas, repeated often and connected to everyday experiences, have a powerful influence over time.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Most importantly, we’ve seen that parents, teachers, and community leaders play the most important role. Children learn best when adults talk with them about money in simple ways and model positive habits. These early conversations help build a strong foundation, giving kids the confidence, curiosity, and interest to keep learning about money as they grow.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    We’ve also discovered that after listening to songs, reading stories, having conversations, and doing activities, many children begin to:
                </p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>Ask questions about many different aspects of money</li>
                    <li style={{ marginBottom: '10px' }}>Feel proud of the new money habits they are developing</li>
                    <li style={{ marginBottom: '10px' }}>Talk about their dreams and goals</li>
                    <li style={{ marginBottom: '10px' }}>Understand that money choices matter</li>
                    <li style={{ marginBottom: '10px' }}>Recognize the importance of good money habits</li>
                    <li style={{ marginBottom: '10px' }}>Become curious about how money grows</li>
                    <li style={{ marginBottom: '10px' }}>Feel confident talking about money</li>
                </ul>
                <p style={{ marginBottom: '0' }}>
                    And many parents and teachers tell us they learn and discover things that help them make better money decisions in their own lives as well.
                </p>
            </FAQItem>

            <FAQItem
                question="What happens during BETA phase?"
                isOpen={openIndex === 8}
                onClick={() => toggleAccordion(8)}
            >
                <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Early Access</p>
                <p style={{ marginBottom: '20px' }}>
                    During our beta phase, families, teachers, and early supporters can explore everything on the site: the first Bedtime Money Habits songs, stories, and activity guides while we continue improving the platform.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Beta participants help us test features, share feedback, and shape the final experience.
                </p>
                <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>During Beta You Can:</p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>Explore songs and karaoke lyric videos</li>
                    <li style={{ marginBottom: '10px' }}>Read the short bedtime story</li>
                    <li style={{ marginBottom: '10px' }}>Use Parent &amp; Family Activity Guides</li>
                    <li style={{ marginBottom: '10px' }}>Help us improve the experience with feedback</li>
                </ul>
                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Access during beta is free!</p>
            </FAQItem>

            <FAQItem
                question="What Can We Expect at the Official Launch?"
                isOpen={openIndex === 9}
                onClick={() => toggleAccordion(9)}
            >
                <p style={{ marginBottom: '20px' }}>
                    After the beta phase, Bedtime Money Habits will grow into a full learning experience designed to help children build strong, positive money habits.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    At launch, we plan to release new bedtime songs, stories, and supporting learning “kits” on a regular basis, giving families and educators fresh resources each week to keep kids engaged and learning.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    We also plan to introduce simple, affordable membership options for families, teachers, and organizations that want ongoing access to the growing library of songs, stories, lesson plans, and activity guides.
                </p>
                <p style={{ marginBottom: '0' }}>
                    As a thank you for helping us improve the platform, beta participants may also be eligible for special early-supporter pricing when the program officially launches.
                </p>
            </FAQItem>

            <FAQItem
                question="Will There Be a Cost After Beta?"
                isOpen={openIndex === 10}
                onClick={() => toggleAccordion(10)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Yes. After the beta phase, we plan to offer simple, affordable membership options for families, teachers, and organizations.
                </p>
                <p style={{ marginBottom: '0' }}>
                    Our goal is to keep the program accessible while continuing to expand the library of songs, stories, lesson plans, and activity guides that help children build strong money habits and positive attitudes about money. Beta participants may also be eligible for special early-supporter pricing when the platform officially launches.
                </p>
            </FAQItem>

            <FAQItem
                question="How Can You Help Us Build Something Great?"
                isOpen={openIndex === 11}
                onClick={() => toggleAccordion(11)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Here are a few simple ways you can help us build something meaningful, something that can positively impact kids, families, and communities around the world.
                </p>
                
                <p style={{ marginBottom: '10px' }}><strong>Join the Beta</strong><br />Be among the first to explore the platform and help us test and improve the experience.</p>
                
                <p style={{ marginBottom: '10px' }}><strong>Try the Resources</strong><br />Listen to the songs, enjoy the stories, and use the activities with kids at home or in the classroom.</p>
                
                <p style={{ marginBottom: '10px' }}><strong>Share Your Feedback</strong><br />Tell us what you and your kids think. Your ideas and suggestions help us make the program better for everyone.</p>
                
                <p style={{ marginBottom: '10px' }}><strong>Be Part of the Community</strong><br />Follow our progress, champion the mission, and share the site with friends, families, educators, and community leaders.</p>
                
                <p style={{ marginBottom: '20px' }}><strong>Take Advantage of Special Beta Offers</strong><br />Early supporters may receive special access, early supporter pricing, and opportunities to help shape what comes next.</p>
                
                <p style={{ marginBottom: '0' }}>
                    Together, we can build something that inspires great habits, meaningful conversations, and brighter financial futures for kids everywhere.
                </p>
            </FAQItem>
        </div>
    );
}
