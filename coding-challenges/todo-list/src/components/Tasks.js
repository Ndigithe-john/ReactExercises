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
import Task from "./Task";
function Tasks() {
  return (
    <div>
      {tasks.map((task) => (
        <Task />
      ))}
    </div>
  );
}
export default Tasks;
