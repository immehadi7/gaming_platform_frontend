import { useNavigate } from 'react-router-dom';

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div className="card game-card border-0 shadow-sm h-100">
      <img
        src={game.image}
        className="card-img-top game-image"
        alt={game.name}
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(`/service/${game.id}`)}
      />

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5
            className="card-title fw-bold mb-0"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/service/${game.id}`)}
          >
            {game.name}
          </h5>
          <span className="badge bg-danger">{game.tag}</span>
        </div>

        <p className="text-muted small mb-3">{game.description}</p>

        <div className="mb-3">
          <div className="fw-semibold small mb-2">语音介绍</div>
          <audio controls className="w-100">
            <source src={game.audio} type="audio/mpeg" />
            您的浏览器不支持音频播放
          </audio>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div>
            <div className="text-muted small">价格</div>
            <div className="fw-bold text-danger fs-5">¥{game.price}</div>
          </div>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => navigate(`/service/${game.id}`)}
          >
            查看详情
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;