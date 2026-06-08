import { Link } from 'react-router-dom';

function GameCard({ title, genre, description, tags, engine, href }) {
    return (
        <Link className="game-card game-card-link" to={href}>
            <div className="game-thumb">
                <div className="thumb-placeholder">
                    <div className="thumb-icon">🎮</div>
                    <div className="thumb-label">SCREENSHOT</div>
                </div>
                <div className="game-engine-badge">{engine}</div>
            </div>
            <div className="game-title">{title}</div>
            <div className="game-genre">{genre}</div>
            <div className="game-desc">{description}</div>
            <div className="game-tags">
                {tags.map(tag => (
                    <span key={tag} className="game-tag">{tag}</span>
                ))}
            </div>
        </Link>
    );
}

export default GameCard;