import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import InputTask from "../InputTask";
import Tasks from "../Tasks";

const HomePage = () => {
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
  const handleTaskRemoveClick = (taskId) => {
    const newtasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newtasks);
  };

  return (
    <>
      <InputTask handleAddTask={handleAddTask} />
      <Tasks
        handleTaskCompleteClick={handleTaskCompleteClick}
        handleTaskRemoveClick={handleTaskRemoveClick}
        tasks={tasks}
      />
    </>
  );
};

export default HomePage;
