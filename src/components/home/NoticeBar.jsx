function NoticeBar() {
  return (
    <section className="notice-bar-section">
      <div className="container">
        <div className="notice-bar d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-danger">公告</span>
            <span className="notice-text">
              新用户首单优惠，热门游戏专区限时活动进行中，支持快速下单与语音介绍试听。
            </span>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              下单须知
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              用户协议
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              退款政策
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticeBar;