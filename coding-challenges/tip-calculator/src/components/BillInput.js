import { useState } from "react";
import "../index.css";
function BillInput() {
  const [billAmount, setBillAmount] = useState(0);
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Enter bill amount"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
      />
    </div>
  );
}
export default BillInput;
