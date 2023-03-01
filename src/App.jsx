import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import InputTask from "./components/InputTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Programar",
      complete: false,
    },
    {
      id: 2,
      title: "Ler Livros",
      complete: true,
    },
  ]);

  const handleAddTask = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        complete: false,
      },
    ];
    setTasks(newTasks);
  };
  const handleTaskCompleteClick = (taskId) => {
    const newtasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, complete: !task.complete };
      return task;
    });

    setTasks(newtasks);
  };

  return (
    <>
      <div className="container">
        <InputTask handleAddTask={handleAddTask} />
        <Tasks
          handleTaskCompleteClick={handleTaskCompleteClick}
          tasks={tasks}
        />
      </div>
    </>
  );
};
export default App;
