export default function TodoList() {
  const todoList = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];
  
  const listColors = ["var(--list-color1)",  "var(--list-color2)",  "var(--list-color3)",  "var(--list-color4)"]


  return (

      <ul>
        {todoList.map((elem, index) => (
          <li
            className="todo-item"
            style={{ backgroundColor: listColors[index % listColors.length] }}
            key={elem.id}
          >
            {elem.title}
          </li>
        ))}
      </ul>

  );
}
