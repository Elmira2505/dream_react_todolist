import TodoListItem from "./TodoListItem.jsx";
export default function TodoList({todoList, onCompleteTodo}) {
 
  return (
    <>
      <ul>{todoList.map((todo) =>  <TodoListItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo}/>)}
      </ul> 
    </>
  );
}
