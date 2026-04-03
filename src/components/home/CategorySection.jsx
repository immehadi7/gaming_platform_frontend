import { mockCategories } from '../../data/mockCategories';

function CategorySection() {
  return (
    <section id="categories" className="py-5 bg-white">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">游戏分类</h2>
            <p className="text-muted mb-0">按热门游戏快速进入服务专区</p>
          </div>
          <button className="btn btn-outline-secondary">全部分类</button>
        </div>

        <div className="row g-4">
          {mockCategories.map((category) => (
            <div key={category.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="category-card text-center h-100">
                <div className="category-icon mb-3">
                  <i className={`bi ${category.icon}`}></i>
                </div>
                <h6 className="mb-2 fw-bold">{category.name}</h6>
                <p className="text-muted small mb-0">进入专区查看服务</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;