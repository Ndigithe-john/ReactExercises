import "../index.css";
import Button from "./Button";
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with X</h2>
      <label>🤑Bill value</label>
      <input type="text" />
      <label>🧑🏿‍🦱Your Expisnses</label>
      <input type="text" />
      <label>🤑Bill value</label>
      <input type="text" disabled />
      <label>💴 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
export default FormSplitBill;
