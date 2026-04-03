import { useNavigate } from 'react-router-dom';

function GameCard({ game }) {
  const navigate = useNavigate();

  const handleSpeak = () => {
    const text = `${game.name}，${game.description}`;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'zh-CN';
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="rental-card h-100">
      <div className={`rental-card-top rental-card-top-${game.topTheme || 'pink'}`}>
        <div className="rental-card-status-row">
          <span className={`rental-status-badge ${game.status === '在线' ? 'online' : 'busy'}`}>
            ● {game.status}
          </span>

          <span className="rental-stock-badge">
            {game.stockLabel || '出租中'}
          </span>
        </div>

        <div
          className="rental-card-image-wrap"
          onClick={() => navigate(`/service/${game.id}`)}
        >
          <img
            src={game.image}
            alt={game.name}
            className="rental-card-image"
          />
        </div>
      </div>

      <div className="rental-card-body">
        <div className="rental-card-rank-row">
          <span className="rental-rank-tag">{game.game}</span>
          <span className="rental-rank-text">{game.rank || '钻石段'}</span>
        </div>

        <h5
          className="rental-card-title"
          onClick={() => navigate(`/service/${game.id}`)}
        >
          {game.name}
        </h5>

        <p className="rental-card-desc">
          {game.description}
        </p>

        <div className="rental-chip-list">
          {(game.features || []).map((feature, index) => (
            <span key={index} className="rental-chip">
              {feature}
            </span>
          ))}
        </div>

        <div className="rental-card-footer">
          <div>
            <div className="rental-price">
              ¥{game.price}
              <span className="rental-price-unit">¥40/小时</span>
            </div>
            <div className="rental-meta">
              <span>◷ {game.deliveryText}</span>
            </div>
          </div>

          <div className="rental-action-group">
            <button
              type="button"
              className="btn rental-audio-btn"
              onClick={handleSpeak}
              title="播放语音介绍"
            >
              <i className="bi bi-volume-up"></i>
            </button>

            <button type="button" className="btn rental-cart-btn">
              加入购物车
            </button>

            <button
              type="button"
              className="btn rental-order-btn"
              onClick={() => navigate(`/service/${game.id}`)}
            >
              立即租用
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;