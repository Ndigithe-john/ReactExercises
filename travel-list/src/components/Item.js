function Item({ item, deleteItem, onToggleItem }) {
  function handleDeleteItem() {
    deleteItem(item.id);
  }
  function handlePacked() {
    onToggleItem(item.id);
  }
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={handlePacked} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
export default Item;
