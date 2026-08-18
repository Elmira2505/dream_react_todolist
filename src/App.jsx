import "./App.css";
import TodoList from "./features/TodoList/TodoList.jsx";
import TodoForm from "./features/TodoForm.jsx";
import {useState} from 'react'
/*
const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];
*/

function App() {
    const [todoList, setTodoList] = useState([])
    
    function addTodo(todoTitle){
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
        isCompleted: false
       }
       setTodoList(previous => [newTodo, ... previous])
       
    }
    function completeTodo(id){
      const updateTodoList= todoList.map((todo) =>{
        if (todo.id === id) {
          return {...todo, isCompleted: true}
        }
        return todo
      })
      setTodoList(updateTodoList)
    }

      function updateTodo(editedTodo) {
        const updatedTodos = todoList.map((todo) => {
          if (todo.id === editedTodo.id) {
            return { ...editedTodo };
          }
          return todo;
        });
        setTodoList(updatedTodos);
      }
  return (
    <div>
      <h1>Todo List</h1>
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

export default App;
