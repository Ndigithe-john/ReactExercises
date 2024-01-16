import "../index.css";
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip😎</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <input type="text" placeholder="Item...." />
      <button>Add</button>
    </form>
  );
}
export default Form;
