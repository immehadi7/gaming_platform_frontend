function QuickEntrySection() {
  const entries = [
    {
      id: 1,
      icon: 'bi-controller',
      title: '游戏专区',
      text: '按游戏快速选择服务',
    },
    {
      id: 2,
      icon: 'bi-person-badge',
      title: '陪玩服务',
      text: '娱乐互动，语音连麦',
    },
    {
      id: 3,
      icon: 'bi-graph-up',
      title: '代练上分',
      text: '稳定高效，快速匹配',
    },
    {
      id: 4,
      icon: 'bi-headset',
      title: '语音介绍',
      text: '试听了解服务风格',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">快捷入口</h2>
            <p className="text-muted mb-0">首页高频功能入口，方便快速操作</p>
          </div>
          <button className="btn btn-outline-secondary">查看更多</button>
        </div>

        <div className="row g-4">
          {entries.map((entry) => (
            <div key={entry.id} className="col-md-6 col-xl-3">
              <div className="quick-entry-card h-100">
                <div className="quick-entry-icon mb-3">
                  <i className={`bi ${entry.icon}`}></i>
                </div>
                <h5 className="fw-bold mb-2">{entry.title}</h5>
                <p className="text-muted mb-3">{entry.text}</p>
                <button type="button" className="btn btn-danger btn-sm">
                  进入
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickEntrySection;