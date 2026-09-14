import "./App.css";
import TodosPage from "./features/Todos/TodosPage";
import Logon from "./features/Logon";
import Header from "./shared/Header";
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
