'use client';

import { WordSearch } from '../../../src/sammy-activities';
import Link from 'next/link';

export default function WordSearchPage() {
    const defaultWords = [
        'MONEY', 'RULES', 'HABIT', 'SAVING', 'EARNING',
        'WANT', 'NEED', 'SUCCESS', 'INVEST', 'GOALS',
        'PLAN', 'TRACKING', 'MANAGE', 'COUNTING', 'BORROW',
        'LEARNING', 'BUDGET'
    ];

    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Link href="/games" className="btn btn-sharp" style={{ textDecoration: 'none' }}>
                        <i className="fas fa-arrow-left"></i> Back to Games
                    </Link>
                </div>
                <WordSearch words={defaultWords} size={10} />
            </div>
        </main>
    );
}
