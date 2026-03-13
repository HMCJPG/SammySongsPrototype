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
    const [openIndex, setOpenIndex] = useState(0); // First one open by default

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div style={{ marginTop: '30px', marginBottom: '50px' }}>
            <FAQItem 
                question="Who are these resources for?" 
                isOpen={openIndex === 0} 
                onClick={() => toggleAccordion(0)}
            >
                <p style={{ marginBottom: '20px' }}>
                    These resources are designed for parents, teachers, caregivers, and anyone who wants to help children build life-changing money habits early. Our goal is simple: put kids on a path toward lifelong financial well-being — security, stability, independence, and opportunity — and position them to pursue their dreams and help others do the same.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    The resources are especially well-suited for children in grades K–3, when foundational habits are forming and repetition has its greatest impact.
                </p>
                <p style={{ marginBottom: '0' }}>
                    And while the collection is called BedtimeMoneyHabits.com, these resources are made to be used anytime, anywhere — at home, in the classroom, in after-school programs, or during family conversations. Wherever children are learning, strong money habits can take root.
                </p>
            </FAQItem>

            <FAQItem 
                question="Why does teaching financial literacy early matter?" 
                isOpen={openIndex === 1} 
                onClick={() => toggleAccordion(1)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Teaching children about money matters more than most parents realize — because money habits start forming as early as age seven. In today's consumer-driven world, kids are constantly surrounded by messages that encourage spending, impulsiveness, and instant gratification, often long before they've learned about saving, budgeting, or waiting for something they really want.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    When parents intentionally build healthy money habits early, they give their children far more than financial knowledge. They give them confidence, independence, less stress, the ability to handle unexpected setbacks, freedom from living paycheck to paycheck, and the capacity to be generous with others.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Financial literacy isn't about raising little accountants. It's about building lifelong habits — understanding wants versus needs, saving consistently, spending intentionally, and preparing for the unexpected. Because most schools still offer limited financial education, these conversations often fall to parents.
                </p>
                <p style={{ marginBottom: '0' }}>
                    The good news? You don't need to be a financial expert. Simply starting open, consistent conversations about money helps shape a healthier, more confident future for your child.
                </p>
            </FAQItem>

            <FAQItem 
                question="Why focus on habits rather than knowledge?" 
                isOpen={openIndex === 2} 
                onClick={() => toggleAccordion(2)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Most adults already know what they should do with money — save, avoid debt, spend less than they earn. Yet many still struggle. The gap isn't knowledge. It's habits.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Research and real-life experience show that lasting behavior change doesn't come from information alone. It comes from repetition, emotion, and early exposure. Habits form when actions are practiced consistently, tied to positive feelings, and built during the years when the brain is still developing. Once a habit is formed, it runs on autopilot — no willpower required.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    That's why our approach is different.
                </p>
                <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    We don't just teach money facts. We help children build money habits.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Through songs and stories, children experience repeated, emotionally positive messages about saving first, spending smart, waiting before buying, planning for the unexpected, and knowing where money goes. Music is especially powerful here — rhythm and melody strengthen memory pathways in the brain, and studies show that information paired with music is retained longer and recalled more easily. Stories add emotional meaning, and emotion is what truly locks habits into place.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    When a child sings about saving, hears stories about waiting, and talks about money regularly with the people they love, they aren't just learning concepts. They're wiring patterns.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Over time, saving becomes automatic. Waiting becomes normal. Planning becomes second nature.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    That's the goal — not a child who knows about money, but a child who practices strong money habits without needing constant reminders.
                </p>
                <div style={{ border: '4px dotted var(--accent-color)', padding: '20px', borderRadius: '16px', margin: '30px 0', fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--text-dark)', textAlign: 'center' }}>
                    Knowledge informs. Habits transform.
                </div>
            </FAQItem>

            <FAQItem 
                question="Why start teaching money habits so early?" 
                isOpen={openIndex === 3} 
                onClick={() => toggleAccordion(3)}
            >
                <p style={{ marginBottom: '20px' }}>
                    Because childhood is the most powerful window you'll ever have.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Research in behavioral science and neuroscience suggests that core money habits and attitudes are largely formed by age seven. During these early years, the brain is highly adaptable. Patterns repeated consistently — especially those tied to emotion and daily routine — become wired pathways. What children practice early begins to feel "normal." And what feels normal tends to last.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    This is why waiting until the teenage years to have serious money conversations often misses the mark. By then, spending impulses, emotional reactions, and behavioral patterns may already be well established. Early childhood, on the other hand, is still a shaping stage — habits are forming, scripts are being written, and defaults are being set.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    That's not a reason to worry. It's a reason to act with confidence.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    If you've ever thought, "Isn't my child too young to learn about money?" — the research says the opposite. Early exposure doesn't mean complex lessons about investing or credit scores. It means simple, repeated experiences: saving a little, waiting before buying, talking calmly about choices, watching money grow toward a goal.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    These small moments add up.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    When children grow up hearing consistent messages about saving, earning, giving, and spending wisely — and when they practice those behaviors in simple, everyday ways — they build automatic patterns that carry into adulthood.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    Starting early isn't about pressure. It's about protection and preparation.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    The earlier strong money habits form, the more time they have to strengthen — and the less likely your child is to struggle later trying to unlearn unhealthy ones.
                </p>
                <p style={{ marginBottom: '0', fontWeight: 'bold', fontStyle: 'italic' }}>
                    It's not too early. In fact, it's exactly the right time.
                </p>
            </FAQItem>
        </div>
    );
}
