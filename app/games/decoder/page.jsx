'use client';

import { useState, useEffect } from 'react';
import { Decoder } from '../../../src/sammy-activities';
import Link from 'next/link';

const SENTENCES = [
    "FOLLOW THE MONEY RULES!",
    "SAVE. MAKE IT A HABIT!",
    "EARN MONEY. DO IT REGULARLY!",
    "SPEND SMART. MAKE IT A HABIT.",
    "GIVE WISELY. DO IT CONSISTENTLY."
];

const TUTORIAL_STEPS = [
    {
        title: "🌟 How to Play 🌟",
        content: <><p style={{ marginBottom: '10px' }}>Welcome, Code Breaker! Your help is needed to crack a secret message.</p><p>Don’t worry — decoding is easy once you know the steps!</p></>
    },
    {
        title: "🔐 Step 1: Look at the Secret Key",
        content: <><p style={{ marginBottom: '10px' }}>You’ll see something like: <br /><strong style={{ fontSize: '1.2em' }}>Key: 1 = U</strong></p><p style={{ marginBottom: '10px' }}>This means: <br />The number 1 matches the letter U. All the other numbers match the letters next to them on the decoder wheel.</p><p>The key tells you how the whole code works!</p></>
    },
    {
        title: "🔄 Step 2: Use the Decoder Wheel",
        content: <><p style={{ marginBottom: '10px' }}>Check out the blue wheel on the right!</p><ul style={{ marginBottom: '10px', paddingLeft: '20px' }}><li>The outer ring has numbers (1–26)</li><li>The inner ring has letters (A–Z)</li></ul><p>They line up based on the key. Turn the wheel (or imagine turning it!) until the number 1 lines up with U. Now every number points to the letter it really means.</p></>
    },
    {
        title: "🕵️ Step 3: Decode the Numbers",
        content: <><p style={{ marginBottom: '10px' }}>You’ll see something like: <br /><strong style={{ letterSpacing: '2px', background: '#f5f5f5', padding: '5px' }}>25 7 2 11 . / 19 7 17 11 / ...</strong></p><p style={{ marginBottom: '10px' }}>Just look at each number and find the matching letter on the wheel.</p><p>Write down the letters you discover — together, they form the secret message!</p></>
    },
    {
        title: "✍️ Step 4: Type the Secret Phrase",
        content: <><p style={{ marginBottom: '10px' }}>Once you think you solved it, type the hidden message into the box that says: <br /><strong style={{ background: '#f5f5f5', padding: '5px' }}>TYPE HERE…</strong></p><p>Make sure your spelling matches exactly!</p></>
    },
    {
        title: "✅ Step 5: Check Your Code!",
        content: <><p style={{ marginBottom: '10px' }}>Click the <strong>Check Code!</strong> button.</p><p>If you cracked the message correctly, you win! If not, no worries — try again and keep decoding like a real detective.</p></>
    },
    {
        title: "⭐ Tips for Super Detectives",
        content: <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}><li>A slash ( <strong>/</strong> ) stands for a space between words</li><li>A period ( <strong>.</strong> ) or exclamation mark (<strong>!</strong>) stays exactly the same</li><li>Work slowly — even real detectives double-check their codes!</li></ul>
    }
];

export default function DecoderPage() {
    const [solution, setSolution] = useState(null);
    const [tutorialStep, setTutorialStep] = useState(0);
    const [showTutorial, setShowTutorial] = useState(true);

    useEffect(() => {
        setSolution(SENTENCES[Math.floor(Math.random() * SENTENCES.length)]);
    }, []);

    const nextStep = () => {
        if (tutorialStep < TUTORIAL_STEPS.length - 1) {
            setTutorialStep(tutorialStep + 1);
        } else {
            setShowTutorial(false);
        }
    };

    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh', position: 'relative' }}>
            {showTutorial && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div style={{
                        background: 'white',
                        padding: '40px',
                        borderRadius: '24px',
                        maxWidth: '650px',
                        width: '100%',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                        textAlign: 'center',
                        border: '4px solid var(--accent-color)',
                        animation: 'fadeIn 0.3s ease-out',
                        position: 'relative'
                    }}>
                        <button 
                            onClick={() => setShowTutorial(false)} 
                            style={{ 
                                position: 'absolute', 
                                top: '15px', 
                                right: '15px', 
                                background: 'none', 
                                border: 'none', 
                                fontSize: '1.5rem', 
                                cursor: 'pointer', 
                                color: '#888' 
                            }}
                            aria-label="Close Instructions"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '25px' }}>
                            {TUTORIAL_STEPS[tutorialStep].title}
                        </h2>
                        <div style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px', textAlign: 'left', lineHeight: '1.6' }}>
                            {TUTORIAL_STEPS[tutorialStep].content}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#888', fontWeight: 'bold' }}>Step {tutorialStep + 1} of {TUTORIAL_STEPS.length}</span>
                            <button onClick={nextStep} className="btn btn-pill" style={{ padding: '12px 30px', fontSize: '1.2rem', margin: 0 }}>
                                {tutorialStep < TUTORIAL_STEPS.length - 1 ? 'Next ➔' : "Let's Go!"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/games" className="btn btn-sharp" style={{ textDecoration: 'none', margin: 0 }}>
                        <i className="fas fa-arrow-left"></i> Back to Games
                    </Link>
                    {!showTutorial && (
                        <button onClick={() => { setTutorialStep(0); setShowTutorial(true); }} className="btn btn-sharp" style={{ background: 'var(--primary-bg)', color: 'var(--text-dark)', border: '2px solid var(--accent-color)', margin: 0 }}>
                            <i className="fas fa-question-circle"></i> View Instructions
                        </button>
                    )}
                </div>
                {solution && <Decoder solution={solution} />}
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main>
    );
}
