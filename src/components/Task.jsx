import React from "react";
import { IoClose, IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskCompleteClick, handleTaskRemoveClick }) => {
  const navigate = useNavigate();

  const handleChangePageInfoClick = (taskTitle) => {
    navigate(`/${taskTitle}`);
  };

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
          onClick={() => handleChangePageInfoClick(task.title)}
          className="task-info-button"
        >
          <IoAlertCircleOutline />
        </button>
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
