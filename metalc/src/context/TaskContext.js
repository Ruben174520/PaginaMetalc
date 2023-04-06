"use client";
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw Error("useTasks must used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [task, setTasks] = useState([
    {
      id: 1,
      title: "Task",
      description: "Some Task0",
    },
    {
      id: 2,
      title: "Task",
      description: "Some Task0",
    },
    {
      id: 3,
      title: "Task",
      description: "Some Task0",
    },
  ]);

  const createTask = (title, description) => {
    setTasks([
      ...task,
      {
        title,
        description,
        id: uuid(),
      },
    ]);
  };
  return (
    <TaskContext.Provider
      value={{
        task,
        createTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
