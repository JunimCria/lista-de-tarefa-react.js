import React from "react";
import "./Task.css";

const Task = ({ task, handleTaskCompleteClick }) => {
  return (
    <div
      style={task.complete ? { borderLeft: "6px solid chartreuse" } : {}}
      className="task-container"
    >
      <div className="task-title" onClick={() => handleTaskCompleteClick(task.id)}>
        {task.title}
      </div>
    </div>
  );
};
export default Task;
