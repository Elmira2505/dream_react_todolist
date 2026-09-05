// src/hooks/useEditableTitle.js
import { useState } from "react";

export function useEditableTitle(initialTitle) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(initialTitle);

  const startEditing = () => {
    setWorkingTitle(initialTitle);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setWorkingTitle(initialTitle);
    setIsEditing(false);
  };

  const updateTitle = (newTitle) => {
    setWorkingTitle(newTitle);
  };

  const finishEdit = () => {
    setIsEditing(false);
    return workingTitle;
  };

  return {
    isEditing,
    workingTitle,
    startEditing,
    cancelEdit,
    updateTitle,
    finishEdit,
  };
}

/*
In TodoListItem, import and use the custom hook:
// Replace the useState calls with:
const {
  isEditing,
  workingTitle,
  startEditing,
  cancelEdit,
  updateTitle,
  finishEdit
} = useEditableTitle(todo.title);

// Update the event handlers:
// handleEdit becomes: (event) => updateTitle(event.target.value)
// handleCancel becomes: cancelEdit
// handleUpdate becomes: (event) => {
//   if (!isEditing) return;
//   event.preventDefault();
//   const finalTitle = finishEdit();
//   onUpdateTodo({ ...todo, title: finalTitle });
// }
// setIsEditing(true) becomes: startEditing()
*/
