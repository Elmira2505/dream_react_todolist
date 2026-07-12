//import { useState } from "react"


export default function TodoForm() {
  //  const [task, setTask] = useState('')
    return(
        <>
        <form className="form">
         
           <label >New task:</label>
           <input type="text"  placeholder="Input task" />
           <button type="submit">Submit</button>
        </form>
        </>
    )
}