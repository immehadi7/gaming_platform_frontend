function LoginPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="fw-bold mb-4">登录</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">手机号 / 邮箱</label>
                <input type="text" className="form-control" placeholder="请输入手机号或邮箱" />
              </div>

              <div className="mb-3">
                <label className="form-label">密码</label>
                <input type="password" className="form-control" placeholder="请输入密码" />
              </div>

              <button type="submit" className="btn btn-danger w-100">
                登录
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
