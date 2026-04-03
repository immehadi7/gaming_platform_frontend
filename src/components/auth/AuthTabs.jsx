import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthTabs({ mode, setMode }) {
  return (
    <>
      <div className="auth-tab-switch mb-4">
        <button
          type="button"
          className={`auth-tab-btn ${mode === 'login-phone' ? 'active' : ''}`}
          onClick={() => setMode('login-phone')}
        >
          手机验证码登录
        </button>

        <button
          type="button"
          className={`auth-tab-btn ${mode === 'login-password' ? 'active' : ''}`}
          onClick={() => setMode('login-password')}
        >
          账号密码登录
        </button>

        <button
          type="button"
          className={`auth-tab-btn ${mode === 'register' ? 'active' : ''}`}
          onClick={() => setMode('register')}
        >
          注册
        </button>
      </div>

      {(mode === 'login-phone' || mode === 'login-password') && (
        <LoginForm mode={mode} setMode={setMode} />
      )}

      {mode === 'register' && <RegisterForm setMode={setMode} />}
    </>
  );
}

export default AuthTabs;