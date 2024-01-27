import "../index.css";
// import initialItems from "../data/data";
import Item from "./Item";
function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} deleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
export default PackingList;
