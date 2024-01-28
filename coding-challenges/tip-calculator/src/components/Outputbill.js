function Outputbill({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay ${bill + tip} (${bill}+${tip} tip)
      </h2>
    </div>
  );
}

export default Outputbill;
