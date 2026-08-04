export default function TodoListItem({ todo, onCompleteTodo }) {
  return <li key={todo.id}>
    <input type= "checkbox"
    checked ={todo.isComplited}
    onChande = {() => onCompleteTodo(todo.id)} />
    {todo.title}
    </li>;
}