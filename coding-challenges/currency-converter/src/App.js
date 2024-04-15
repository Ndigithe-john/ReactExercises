// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState } from "react";

export default function App() {
  const [inputAmount, setInputAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("USD");
  const [convertTo, setConvertTo] = useState("USD");
  return (
    <div>
      <input
        type="text"
        value={inputAmount}
        onChange={(e) => setInputAmount(Number(e.target.value))}
      />
      <select onChange={(e) => setFromAmount(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setConvertTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
