"use client";
import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";

function page() {
  const [task, setTask] = useState();
  const { createTask } = useTasks();
  const router = useRouter()

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubtmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description)
    router.push('/')
  };
  return (
    <form onSubmit={handleSubtmit}>
      <input name="title" placeholder="Wire a title" onChange={handleChange} />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}

export default page;
