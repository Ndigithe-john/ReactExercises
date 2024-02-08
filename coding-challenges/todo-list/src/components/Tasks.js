import Task from "./Task";
const tasks = [
  {
    id: 1,
    task: "Washing Utensils",
    completed: false,
  },
  {
    id: 2,
    task: "Washing Clothes",
    completed: false,
  },
  {
    id: 3,
    task: "Going to the market",
    completed: false,
  },
];

function Tasks({ tasks, handleDelete }) {
  return (
    <div>
      {tasks.map((task, i) => (
        <Task task={task} key={task.id} index={i} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
export default Tasks;
