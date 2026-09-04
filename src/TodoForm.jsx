import {useRef, useState} from 'react'



export default function TodoForm({onAddTodo}) {
  const inputRef = useRef()
  const [workingTodoTitle, setWorkingTodoTitle] = useState("")
  const handleAddtodo = (event)=> {
    event.preventDefault()
    
    const todoTitle= workingTodoTitle.trim()
    if (todoTitle && todoTitle !== ''){
      onAddTodo(todoTitle)
      setWorkingTodoTitle ("")
      event.target.reset()
      inputRef.current.focus()
    }


  }
    return (
      <form onSubmit={handleAddtodo}>
        <label htmlFor="todoTitle">Todo</label>
        <input id="todoTitle" type="text"
               ref={inputRef} name="todoTitle"
               placeholder={'Todo text'}
               value = {workingTodoTitle}
               onChange ={(event) => setWorkingTodoTitle(event.target .value)}
               required
                />
        <button type="submit" disabled={!workingTodoTitle.trim()}>
          Add Todo
        </button>
      </form>
    );
}