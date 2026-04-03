function ServiceInfo({ game }) {
  return (
    <div className="service-info-card">
      <div className="mb-3">
        <span className="badge bg-danger me-2">{game.tag}</span>
        <span className="badge bg-light text-dark">高人气</span>
      </div>

      <h1 className="fw-bold mb-3">{game.name}</h1>

      <div className="d-flex align-items-center gap-3 mb-4">
        <div className="service-price">¥{game.price}</div>
        <span className="text-muted">/ 次</span>
      </div>

      <p className="text-muted mb-4">{game.description}</p>

      <div className="mb-4">
        <div className="fw-semibold mb-2">语音介绍</div>
        <audio controls className="w-100">
          <source src={game.audio} type="audio/mpeg" />
        </audio>
      </div>

      <div className="mb-4">
        <div className="fw-semibold mb-2">服务说明</div>
        <ul className="text-muted small mb-0">
          <li>支持语音沟通</li>
          <li>可按需求定制服务内容</li>
          <li>支持预约与即时下单</li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceInfo;