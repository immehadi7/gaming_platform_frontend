function FeaturedCompanionSection() {
  const companions = [
    {
      id: 1,
      name: '小柔',
      role: '王者荣耀陪玩',
      price: '¥29/局',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: '阿泽',
      role: '和平精英带飞',
      price: '¥35/局',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: '七七',
      role: '原神代肝',
      price: '¥22/次',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: '北辰',
      role: '英雄联盟双排',
      price: '¥42/局',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">推荐陪陪</h2>
            <p className="text-muted mb-0">精选高人气服务角色，适合首页推荐展示</p>
          </div>
          <button className="btn btn-outline-secondary">查看全部</button>
        </div>

        <div className="row g-4">
          {companions.map((item) => (
            <div key={item.id} className="col-md-6 col-xl-3">
              <div className="companion-card h-100">
                <img src={item.image} alt={item.name} className="companion-image" />
                <div className="p-3">
                  <h5 className="fw-bold mb-1">{item.name}</h5>
                  <p className="text-muted small mb-2">{item.role}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-danger">{item.price}</span>
                    <button type="button" className="btn btn-danger btn-sm">
                      立即下单
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCompanionSection;