function FeatureStrip() {
  const items = [
    { id: 1, icon: 'bi-lightning-charge', title: '极速接单', text: '快速匹配，提升转化效率' },
    { id: 2, icon: 'bi-shield-check', title: '安全保障', text: '订单流程清晰，服务更放心' },
    { id: 3, icon: 'bi-headset', title: '语音互动', text: '支持音频介绍与沟通体验' },
    { id: 4, icon: 'bi-graph-up-arrow', title: '热门推荐', text: '精选高人气服务项目' },
  ];

  return (
    <section className="feature-strip py-4">
      <div className="container">
        <div className="row g-3">
          {items.map((item) => (
            <div key={item.id} className="col-md-6 col-xl-3">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="text-muted mb-0 small">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureStrip;