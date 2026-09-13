import "./App.css";
import TodoList from "./features/Todolist/TodoList.jsx";
import TodoForm from "./features/TodoForm.jsx";
import { useAuth } from "./contexts/AuthContext";
/*
const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];
*/

function App() {

const { isAuthenticated } = useAuth();

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <TodosPage />
      ) : (
        <>
          <Logon />
        </>
      )}
    </>
  );
}

export default App;
