function ServiceCategory({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="Amazing">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}
export default ServiceCategory;
