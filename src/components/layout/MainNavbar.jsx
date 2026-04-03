import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <header className="border-bottom bg-white sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2">
          <Link to="/" className="navbar-brand fw-bold brand-logo">
            陪陪
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="切换导航"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">首页</Link>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link">分类</a>
              </li>
              <li className="nav-item">
                <a href="#games" className="nav-link">游戏专区</a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link">联系我们</a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <button type="button" className="btn btn-light">
                <i className="bi bi-search"></i>
              </button>
              <Link to="/login" className="btn btn-outline-danger">
                登录
              </Link>
              <Link to="/register" className="btn btn-danger">
                注册
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavbar;
