function SearchSection() {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-box shadow-sm">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="搜索游戏、陪玩、代练、服务类型"
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="d-grid">
                <button className="btn btn-danger btn-lg">立即搜索</button>
              </div>
            </div>
          </div>

          <div className="popular-keywords mt-3">
            <span className="text-muted me-2">热门搜索:</span>
            <span className="badge text-bg-light me-2">王者荣耀</span>
            <span className="badge text-bg-light me-2">和平精英</span>
            <span className="badge text-bg-light me-2">代练上分</span>
            <span className="badge text-bg-light me-2">语音陪玩</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;