function MainFooter() {
  return (
    <footer id="footer" className="footer-section bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold">陪陪平台</h5>
            <p className="text-white-50 mb-0">
              专注游戏陪玩、代练、开黑与娱乐互动，打造高质量服务体验。
            </p>
          </div>

          <div className="col-lg-4">
            <h6 className="fw-bold">快速入口</h6>
            <ul className="list-unstyled text-white-50">
              <li>首页</li>
              <li>游戏分类</li>
              <li>下单流程</li>
              <li>用户中心</li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="fw-bold">平台说明</h6>
            <ul className="list-unstyled text-white-50">
              <li>用户协议</li>
              <li>退款政策</li>
              <li>下单须知</li>
              <li>联系客服</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
