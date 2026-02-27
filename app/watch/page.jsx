import Link from 'next/link';
import songs from '../../data/songs.json';

export default function SongGallery() {
    return (
        <main className="gallery-page">
            <div className="container">
                <h2 className="gallery-title">Bedtime Songs and Stories Video Gallery</h2>
                <div className="gallery-grid">
                    {songs.map((song) => (
                        <Link href={`/watch/${song.id}`} key={song.id} className="thumb-card">
                            <div className="thumb-img-wrapper">
                                <img src={song.thumbnail} alt={song.title} className="thumb-img" />
                                <div className="play-overlay">
                                    <i className="fas fa-play-circle"></i>
                                </div>
                            </div>
                            <div className="thumb-title-bar">
                                <h3>{song.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
