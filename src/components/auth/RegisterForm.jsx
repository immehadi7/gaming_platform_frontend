function RegisterForm({ setMode }) {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control auth-input"
          placeholder="请输入用户名"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control auth-input"
          placeholder="请输入手机号"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control auth-input"
          placeholder="请输入密码"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control auth-input"
          placeholder="请再次输入密码"
        />
      </div>

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="registerAgree" />
        <label className="form-check-label auth-agree-text" htmlFor="registerAgree">
          我已阅读并同意
          <span className="text-danger">《用户协议》</span>
          和
          <span className="text-danger">《隐私政策》</span>
        </label>
      </div>

      <button type="button" className="btn auth-submit-btn w-100 mb-3">
        注册
      </button>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-link auth-link-btn"
          onClick={() => setMode('login-password')}
        >
          已有账号？去登录
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;