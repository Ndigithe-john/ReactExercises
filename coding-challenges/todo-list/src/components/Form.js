import React from "react";

const Form = () => {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={submitHandler}>
      <input placeholder="" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
