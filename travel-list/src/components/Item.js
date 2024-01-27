function Item({ item, deleteItem }) {
  function handleDeleteItem() {
    deleteItem(item.id);
  }
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
export default Item;
