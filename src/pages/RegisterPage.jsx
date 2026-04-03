function RegisterPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="fw-bold mb-4">注册</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">用户名</label>
                <input type="text" className="form-control" placeholder="请输入用户名" />
              </div>

              <div className="mb-3">
                <label className="form-label">手机号</label>
                <input type="text" className="form-control" placeholder="请输入手机号" />
              </div>

              <div className="mb-3">
                <label className="form-label">密码</label>
                <input type="password" className="form-control" placeholder="请输入密码" />
              </div>

              <button type="submit" className="btn btn-danger w-100">
                注册
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
