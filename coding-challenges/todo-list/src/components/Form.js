const Form = ({ task, onGetTask, submitHandler }) => {
  return (
    <form className="inputForm" onSubmit={submitHandler}>
      <input
        placeholder="input task"
        value={task}
        onChange={(e) => {
          onGetTask(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
