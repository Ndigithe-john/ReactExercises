import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import "./index.css";
function App() {
  const [task, getTask] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    if (!task) return;
    const newTask = { task, completed: true, id: Date() };
    getTask("");
  }
  return (
    <div className="App">
      <Form task={task} onGetTask={getTask} submitHandler={submitHandler} />
      <Tasks task={task} />
    </div>
  );
}

export default App;
