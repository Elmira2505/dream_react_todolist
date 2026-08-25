import "./App.css";
import Header from "./shared/Header.jsx";
import TodosPage from "./features/Todos/TodosPage.jsx";
import Logon from "./features/Logon.jsx";
import { useState } from "react";
/*
const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];
*/

function App() {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
 
  return (
    <>
    
      <Header token={token} onSetToken={setToken} onSetEmail={setEmail} />

      {token ? (
        <TodosPage token={token} />
      ) : (
        <Logon onSetEmail={setEmail} onSetToken={setToken} />
      )}
    </>
  );
}

export default App;
