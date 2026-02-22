'use client';
import Link from 'next/link';

export default function ListenAndWatch() {
    return (
        <main className="listen-watch-page">
            <div className="container listen-watch-container">

                {/* Songs Card */}
                <div className="content-card-split" style={{ alignSelf: 'flex-start' }}>
                    <div className="split-graphic scoop-bottom-left">
                        <img
                            src="/assets/sammy_headphones.png"
                            alt="Sammy Rabbit Songs"
                            className="split-img"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </div>
                    <div className="split-text">
                        <h2>Songs</h2>
                        <p>
                            Do you like listening to Sammy Rabbit songs? Singing songs is a great way to learn about money and habits! Listen to songs, print activities, and post comments!
                        </p>
                        <Link href="/watch" className="btn btn-pill" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Learn more.</Link>
                    </div>
                </div>

                {/* Short Stories Card */}
                <div className="content-card-split reverse" style={{ alignSelf: 'flex-end' }}>
                    <div className="split-text">
                        <h2>Short stories</h2>
                        <p>
                            Do you like listening to and reading stories? Reading Sammy's adventures is a great way to improve your vocabulary and learn valuable life lessons. Watch stories, print activities, and post comments!
                        </p>
                        <button className="btn btn-pill">Learn more.</button>
                    </div>
                    <div className="split-graphic scoop-top-left">
                        <img
                            src="/assets/sammy_book.png"
                            alt="Sammy Rabbit Short Stories"
                            className="split-img"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </div>
                </div>

            </div>
        </main>
    );
}
