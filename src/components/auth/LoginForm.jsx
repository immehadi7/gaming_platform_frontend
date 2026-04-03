function LoginForm({ mode, setMode }) {
  return (
    <form>
      {mode === 'login-phone' ? (
        <>
          <div className="mb-3">
            <input
              type="text"
              className="form-control auth-input"
              placeholder="请输入手机号"
            />
          </div>

          <div className="mb-2">
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control auth-input"
                placeholder="请输入验证码"
              />
              <button type="button" className="btn auth-code-btn">
                获取验证码
              </button>
            </div>
          </div>

          <p className="auth-helper-text mb-3">
            未注册手机号验证后自动创建账号
          </p>
        </>
      ) : (
        <>
          <div className="mb-3">
            <input
              type="text"
              className="form-control auth-input"
              placeholder="请输入用户名"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control auth-input"
              placeholder="请输入密码"
            />
          </div>
        </>
      )}

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="loginAgree" />
        <label className="form-check-label auth-agree-text" htmlFor="loginAgree">
          我已阅读并同意
          <span className="text-danger">《用户协议》</span>
          和
          <span className="text-danger">《隐私政策》</span>
        </label>
      </div>

      <button type="button" className="btn auth-submit-btn w-100 mb-3">
        {mode === 'login-phone' ? '登录 / 注册' : '登录'}
      </button>

      <div className="auth-divider">其他方式登录</div>

      <div className="row g-2 mt-1">
        <div className="col-6">
          <button type="button" className="btn auth-social-btn w-100">
            <span className="me-1">💙</span> 支付宝
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn auth-social-btn w-100">
            <span className="me-1">💚</span> 微信
          </button>
        </div>
      </div>

      <div className="text-center mt-3">
        <button
          type="button"
          className="btn btn-link auth-link-btn"
          onClick={() => setMode('register')}
        >
          还没有账号？去注册
        </button>
      </div>
    </form>
  );
}

export default LoginForm;