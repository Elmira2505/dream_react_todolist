//import { useState } from "react"
import 'App.css'


export default function TodoForm() {
  //  const [task, setTask] = useState('')
    return (
      <>
        <form className="form">
          <label htmlFor="task">TO do:</label>
          <input id="task" type="text" placeholder="Input task" />
          <button type="submit" disabled>Submit</button>
        </form>
      </>
    );
}