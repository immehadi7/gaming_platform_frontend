import { useState } from 'react';

function QuantitySelector() {
  const [qty, setQty] = useState(1);

  const increase = () => setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);

  return (
    <div className="quantity-box">
      <div className="fw-semibold mb-2">数量</div>

      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary" onClick={decrease}>
          -
        </button>

        <input
          type="text"
          value={qty}
          readOnly
          className="form-control text-center"
          style={{ width: '60px' }}
        />

        <button className="btn btn-outline-secondary" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;