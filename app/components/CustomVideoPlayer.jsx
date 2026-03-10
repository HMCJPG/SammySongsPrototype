'use client';

import { useState, useRef } from 'react';

export default function CustomVideoPlayer({ src, poster }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', backgroundColor: 'black', borderRadius: '12px', overflow: 'hidden' }}>
            {!isPlaying && (
                <div
                    onClick={handlePlay}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 10,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${poster})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '50%',
                        width: '90px',
                        height: '90px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s, background-color 0.2s',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        border: '3px solid rgba(255,255,255,0.2)'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                            e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                        }}
                    >
                        <i className="fas fa-play" style={{ color: 'white', fontSize: '36px', marginLeft: '6px' }}></i>
                    </div>
                </div>
            )}

            <video
                ref={videoRef}
                src={src}
                controls={isPlaying} // only show controls once playing starts
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
        </div>
    );
}
