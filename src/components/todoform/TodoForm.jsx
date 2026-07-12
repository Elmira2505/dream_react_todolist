//import { useState } from "react"


export default function TodoForm() {
  //  const [task, setTask] = useState('')
    return (
      <>
        <form className="form">
          <label htmlFor="task">New task:</label>
          <input id="task" type="text" placeholder="Input task" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
}