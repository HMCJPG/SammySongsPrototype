'use client';

import { MemoryMatch } from '../../../src/sammy-activities';
import Link from 'next/link';

export default function MemoryMatchPage() {
    // Default pairs for testing
    const defaultPairs = [
        { id: 1, word: 'Money' },
        { id: 2, word: 'Rules' },
        { id: 3, word: 'Habit' },
        { id: 4, word: 'Follow' },
        { id: 5, word: 'Save' },
        { id: 6, word: 'Earn' },
        { id: 7, word: 'Spend Smart' },
        { id: 8, word: 'Give Wisely' }
    ];

    return (
        <main style={{ padding: '80px 20px', backgroundColor: 'var(--light-bg)', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Link href="/games" className="btn btn-sharp" style={{ textDecoration: 'none' }}>
                        <i className="fas fa-arrow-left"></i> Back to Games
                    </Link>
                </div>
                <MemoryMatch pairs={defaultPairs} rows={4} columns={4} />
            </div>
        </main>
    );
}
