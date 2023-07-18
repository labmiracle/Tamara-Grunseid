import { useState } from "react";

const ListItem = ({ task, onRemoveTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedTask(task);
  };

  const handleSaveEdit = () => {
    onEditTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Guardar</button>
          <button onClick={handleCancelEdit}>Cancelar</button>
        </div>
      ) : (
        <div>
          <span>{task}</span>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={onRemoveTask}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
