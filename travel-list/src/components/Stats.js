import "../index.css";
function Stats({ itemsArray }) {
  if (!itemsArray.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀🚀</em>
      </p>
    );
  const numItems = itemsArray.length;
  const numPacked = itemsArray.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everthing! Ready to go ✈️✈️"
          : `💼 You have ${numItems} items on your list and you already packed
          ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
export default Stats;
