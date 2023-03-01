import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskCompleteClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskCompleteClick={handleTaskCompleteClick} />
      ))}
    </>
  );
};

export default Tasks;
