import "./App.css";
import TodoList from "./features/Todolist/TodoList.jsx";
import TodoForm from "./features/TodoForm.jsx";
import { useState } from "react";
/*
const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];
*/

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      isCompleted: false,
    };
    setTodoList((previous) => [newTodo, ...previous]);
  }
  function completeTodo(id) {
    const updateTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodoList(updateTodoList);
  }
  const updateTodo = (editedTodo) => {
    const updateTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) {
        return { ...editedTodo };
      } else {
        return todo;
      }
    });
    setTodoList(updateTodos);
  };
  return (
    <>
      <Header />
      {isAuthenticated ? (
        <TodosPage />
      ) : (
        <TodoList
          todoList={todoList}
          onCompleteTodo={completeTodo}
          onUpdateTodo={updateTodo}
        />
      )}
    </>
  );
}

export default App;
