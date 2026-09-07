import TodoListItem from "./TodoListItem.jsx";
export default function TodoList({todoList, onCompleteTodo, onUpdateTodo}) {
const filteredTodoList = todoList.filter((todo) => todo.isCompleted === false);
 
  return (
    <>
      {todoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}
