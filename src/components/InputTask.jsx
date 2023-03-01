import React, { useState } from "react";
import "./InputTask.css";
import Button from "./Button";

const InputTask = ({ handleAddTask }) => {
  const [inputTask, setInputTask] = useState("");

  const handleInputTaskChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleTaskAddClick = () => {
    if (inputTask !== "") {
      handleAddTask(inputTask);
    }
    setInputTask("");
  };

  return (
    <>
      <div className="add-task-container">
        <input
          value={inputTask}
          onChange={handleInputTaskChange}
          className="input-Task"
          type="text"
        />
        <Button onClick={handleTaskAddClick}>Adicionar</Button>
      </div>
    </>
  );
};

export default InputTask;
