import ListItem from "./ListItem";
import InputText from "./InputText";
import AddTaskButton from "./AddTaskButton";

const List = ({ tasks, addTask, removeTask, editTask }) => {
  const handleAddTask = (newTask) => {
    addTask(newTask);
  };

  const handleRemoveTask = (taskIndex) => {
    removeTask(taskIndex);
  };

  const handleEditTask = (taskIndex, updatedTask) => {
    editTask(taskIndex, updatedTask);
  };

  return (
    <div>
      <InputText onAddTask={handleAddTask} />
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          task={task}
          onRemoveTask={() => handleRemoveTask(index)}
          onEditTask={(updatedTask) => handleEditTask(index, updatedTask)}
        />
      ))}
      <AddTaskButton onAddTask={handleAddTask} />
    </div>
  );
};

export default List;
