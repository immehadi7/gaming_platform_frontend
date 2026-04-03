import AuthTabs from './AuthTabs';

function AuthModal({ isOpen, mode, setMode, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div
        className="auth-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-modal-header">
          <div className="auth-logo-circle">
            <i className="bi bi-controller"></i>
          </div>

          {/* CLEAN HEADER (no "61") */}
          <p className="auth-subtitle mb-0">游戏账号租赁平台</p>
        </div>

        <div className="auth-modal-body">
          <AuthTabs mode={mode} setMode={setMode} />

          <button
            type="button"
            className="auth-close-btn"
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;