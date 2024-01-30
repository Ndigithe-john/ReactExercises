import "../index.css";
import Button from "./Button";
function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {selectedFriend.name}</h2>
      <label>🤑Bill value</label>
      <input type="text" />
      <label>🧑🏿‍🦱Your Expisnses</label>
      <input type="text" />
      <label>🤑{selectedFriend.name}'s expenses</label>
      <input type="text" disabled />
      <label>💴 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
export default FormSplitBill;
