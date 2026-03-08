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

export default function DecoderPage() {
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        setSolution(SENTENCES[Math.floor(Math.random() * SENTENCES.length)]);
    }, []);

    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Link href="/games" className="btn btn-sharp" style={{ textDecoration: 'none' }}>
                        <i className="fas fa-arrow-left"></i> Back to Games
                    </Link>
                </div>
                {solution && <Decoder solution={solution} />}
            </div>
        </main>
    );
}
