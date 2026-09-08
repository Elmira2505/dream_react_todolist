import { useState } from "react";
import TodoForm from '../Todos/TodoForm.jsx'
import TodoList from '../Todos/TodoList/TodoList.jsx'
import Header from '../../shared/Header.jsx'

export default function TodosPage(){


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
        <div>
          <Header />
          <TodoForm onAddTodo={addTodo} />
          {todoList.length === 0 ? (
            <p>Add todo above to get started</p>
          ) : (
            <TodoList
              todoList={todoList}
              onCompleteTodo={completeTodo}
              onUpdateTodo={updateTodo}
            />
          )}
        </div>
      );
}