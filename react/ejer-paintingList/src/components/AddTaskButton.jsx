const AddTaskButton = ({ onAddTask }) => {
  const handleClick = () => {
    const newTask = prompt("Ingrese una nueva tarea");
    if (newTask && newTask.trim() !== "") {
      onAddTask(newTask);
    }
  };

  return <button onClick={handleClick}>Agregar Tarea</button>;
};

export default AddTaskButton;
