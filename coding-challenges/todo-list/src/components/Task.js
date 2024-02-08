const Task = ({ task, index, handleDelete }) => {
  return (
    <div className="task">
      <p>
        <span>{index + 1} </span>
        {task.task}
      </p>
      <button onClick={() => handleDelete(task.id)}>delete</button>
    </div>
  );
};

export default Task;
