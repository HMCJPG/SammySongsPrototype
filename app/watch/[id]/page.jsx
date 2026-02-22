'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import songsData from '../../../data/songs.json';
import { useRef, useState, useEffect } from 'react';

export default function VideoPlayerPage() {
    const { id } = useParams();
    const [song, setSong] = useState(null);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const foundSong = songsData.find((s) => s.id === id);
        setSong(foundSong);
    }, [id]);

    if (!song) return <div className="container" style={{ padding: '80px 0' }}><h2>Loading...</h2></div>;

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setProgress((current / total) * 100 || 0);
        }
    };

    const handleSeek = (e) => {
        const seekTo = e.target.value;
        if (videoRef.current && videoRef.current.duration) {
            videoRef.current.currentTime = (seekTo / 100) * videoRef.current.duration;
            setProgress(seekTo);
            if (!isPlaying) togglePlay();
        }
    };

    const handleVolume = (e) => {
        const vol = e.target.value;
        if (videoRef.current) {
            videoRef.current.volume = vol;
            setVolume(vol);
        }
    };

    const toggleFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <main className="player-page">
            <div className="container player-container">
                <div className="player-header">
                    <Link href="/watch" className="btn btn-sharp back-btn">
                        <i className="fas fa-arrow-left"></i> Back to Gallery
                    </Link>
                    <h2 className="player-title">{song.title}</h2>
                </div>

                <div className="video-wrapper">
                    <video
                        ref={videoRef}
                        src={song.videoUrl}
                        poster={song.thumbnail}
                        className="html5-video"
                        onTimeUpdate={handleTimeUpdate}
                        onClick={togglePlay}
                    />
                    <div className="custom-controls">
                        <button onClick={togglePlay} className="control-btn" aria-label="Play or Pause">
                            <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
                        </button>
                        <input
                            type="range"
                            className="progress-bar"
                            value={progress || 0}
                            onChange={handleSeek}
                            min="0"
                            max="100"
                            aria-label="Video Progress"
                        />
                        <div className="vol-container">
                            <i className="fas fa-volume-up"></i>
                            <input
                                type="range"
                                className="volume-bar"
                                value={volume}
                                onChange={handleVolume}
                                min="0"
                                max="1"
                                step="0.05"
                                aria-label="Volume"
                            />
                        </div>
                        <button onClick={toggleFullScreen} className="control-btn" aria-label="Toggle Fullscreen">
                            <i className="fas fa-expand"></i>
                        </button>
                    </div>
                </div>

                <div className="video-description">
                    <p>{song.description}</p>
                </div>
            </div>
        </main>
    );
}
