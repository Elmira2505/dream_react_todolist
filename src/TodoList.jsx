export default function TodoList() {
  const todoList = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];
  
  /*
  const listColors = ["var(--list-color1)",  "var(--list-color2)",  "var(--list-color3)",  "var(--list-color4)"]
  */


  return (
    <ul>
     { /*
      <li
        className="todo-item"
        style={{ backgroundColor: listColors[index % listColors.length] }}
        key={todo.id}>
            {todo.title}
      </li>
      */}
      {todoList.map((todo) => (
         <li key={todo.id}>
        {todo.title}
        </li>
      ))}
    </ul>
  );
}
