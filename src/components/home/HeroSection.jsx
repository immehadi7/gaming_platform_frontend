function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-box">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge bg-danger mb-3 px-3 py-2">平台热门推荐</span>

              <h1 className="hero-title fw-bold mb-3">
                游戏陪玩 / 代练 / 语音互动
              </h1>

              <p className="hero-text text-muted mb-4">
                面向中文市场的专业游戏服务平台，支持快速下单、分类筛选、语音介绍与多角色管理后台。
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <button type="button" className="btn btn-danger btn-lg px-4">
                  立即下单
                </button>
                <button type="button" className="btn btn-outline-dark btn-lg px-4">
                  浏览服务
                </button>
              </div>

              <div className="hero-stats row g-3">
                <div className="col-sm-4">
                  <div className="stat-box">
                    <h4 className="fw-bold mb-1">1000+</h4>
                    <p className="mb-0 text-muted small">活跃服务</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="stat-box">
                    <h4 className="fw-bold mb-1">24H</h4>
                    <p className="mb-0 text-muted small">在线接单</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="stat-box">
                    <h4 className="fw-bold mb-1">高好评</h4>
                    <p className="mb-0 text-muted small">优质体验</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
                  alt="平台展示"
                  className="img-fluid rounded-4 hero-main-image"
                />

                <div className="floating-card floating-card-top shadow">
                  <div className="small text-muted">热门服务</div>
                  <div className="fw-bold">王者荣耀陪玩</div>
                  <div className="text-danger fw-semibold">¥28 起</div>
                </div>

                <div className="floating-card floating-card-bottom shadow">
                  <div className="small text-muted">语音介绍</div>
                  <div className="fw-bold">支持试听体验</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;