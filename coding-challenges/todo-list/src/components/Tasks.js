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

function Tasks({ task, tasks }) {
  return (
    <div>
      {tasks.map((task, i) => (
        <Task task={task} key={task.id} index={i} />
      ))}
    </div>
  );
}
export default Tasks;
