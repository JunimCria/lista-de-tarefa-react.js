import React from "react";
import { IoClose } from "react-icons/io5";

import "./Task.css";

const Task = ({ task, handleTaskCompleteClick, handleTaskRemoveClick }) => {
  return (
    <div
      style={task.complete ? { borderLeft: "6px solid chartreuse" } : {}}
      className="task-container"
    >
      <div
        className="task-title"
        onClick={() => handleTaskCompleteClick(task.id)}
      >
        {task.title}
      </div>

      <div className="task-options-container">
        <button
          onClick={() => handleTaskRemoveClick(task.id)}
          className="task-remove-button"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};
export default Task;
