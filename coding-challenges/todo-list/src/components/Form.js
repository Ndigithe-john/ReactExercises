import React from "react";

const Form = () => {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <form className="inputForm" onSubmit={submitHandler}>
      <input placeholder="input task" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
