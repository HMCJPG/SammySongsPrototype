'use client';

export default function Home() {
    return (
        <main>
            <section className="hero-section">
                <div className="container hero-content">
                    <div className="hero-left">
                        <img
                            src="/assets/3d_box.png"
                            alt="3D Geometric Box"
                            className="isometric-box"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="content-card">
                            <h2 className="card-title">Hello, hello, hello</h2>
                            <p className="card-text">Who is Sammy Rabbit? Listen to a song called Hello, hello, hello and sing along.</p>
                            <button className="btn btn-pill">Watch the video.</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img
                            src="/assets/boy_character.png"
                            alt="Boy character"
                            className="char-boy"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <img
                            src="/assets/girl_apron.png"
                            alt="Girl in blue apron"
                            className="char-girl"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <img
                            src="/assets/purple_robot.png"
                            alt="Small purple robot"
                            className="char-robot"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </div>
                </div>
            </section>

            <section className="body-content">
                <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-dark)', fontSize: '2rem', marginBottom: '20px' }}>
                        Explore Sammy Rabbit Songs
                    </h3>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>
                        More educational content coming soon below the fold!
                    </p>
                </div>
            </section>
        </main>
    );
}
