import { useState } from "react";
import "../index.css";
function BillInput() {
  const [billAmount, setBillAmount] = useState(0);
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="number"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
      />
    </div>
  );
}
export default BillInput;
