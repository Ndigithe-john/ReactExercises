import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import "./index.css";
function App() {
  const [task, getTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    if (!task) return;
    const newTask = { task, completed: true, id: Date() };
    setTasks((prev) => [...prev, newTask]);
    getTask("");
  }
  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  return (
    <div className="App">
      <Form task={task} onGetTask={getTask} submitHandler={submitHandler} />
      <Tasks tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
