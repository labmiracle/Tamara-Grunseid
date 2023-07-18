import { useState } from "react";
import List from "./List";

const ListContainer = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const editTask = (taskIndex, updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <List
      tasks={tasks}
      addTask={addTask}
      removeTask={removeTask}
      editTask={editTask}
    />
  );
};

export default ListContainer;
