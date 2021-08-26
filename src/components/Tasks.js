import { useState } from "react";
import { initialState } from "../store/initialStates";

export default function Tasks() {
  const [tasks, setTasks] = useState(initialState);
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
}
