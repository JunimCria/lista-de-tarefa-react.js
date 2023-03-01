import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskCompleteClick, handleTaskRemoveClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskCompleteClick={handleTaskCompleteClick}
          handleTaskRemoveClick={handleTaskRemoveClick}
        />
      ))}
    </>
  );
};

export default Tasks;
