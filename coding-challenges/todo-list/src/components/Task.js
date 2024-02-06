const Task = ({ task, index }) => {
  return (
    <div className="task">
      <p>
        <span>{index + 1} </span>
        {task.task}
      </p>
      <button>delete</button>
    </div>
  );
};

export default Task;
