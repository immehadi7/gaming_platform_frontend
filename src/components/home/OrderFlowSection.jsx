function OrderFlowSection() {
  const steps = [
    { id: 1, title: '选择游戏', text: '进入分类后选择需要的游戏服务' },
    { id: 2, title: '挑选服务', text: '浏览陪玩、代练或语音介绍内容' },
    { id: 3, title: '提交订单', text: '填写要求并确认下单信息' },
    { id: 4, title: '完成支付', text: '支持支付宝等后续接入方式' },
  ];

  return (
    <section className="order-flow-section py-5">
      <div className="container">
        <div className="order-flow-box">
          <div className="section-heading text-center mb-5">
            <h2 className="fw-bold mb-2">下单流程</h2>
            <p className="text-muted mb-0">简单四步，完成从浏览到支付的全过程</p>
          </div>

          <div className="row g-4">
            {steps.map((step, index) => (
              <div key={step.id} className="col-md-6 col-xl-3">
                <div className="flow-card h-100 text-center">
                  <div className="flow-number">{index + 1}</div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted mb-0">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderFlowSection;