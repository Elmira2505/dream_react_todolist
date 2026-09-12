import {useRef, useState} from 'react'
import TextInputWithLabel from '../shared/TextInputWithLabel.jsx'
import isValidTodoTitle from '../utils/todoValidation.js'



export default function TodoForm({onAddTodo}) {
  const inputRef = useRef()
  const [workingTodoTitle, setWorkingTodoTitle] = useState("")
  const handleAddtodo = (event)=> {
    event.preventDefault()
    const todoTitle = workingTodoTitle.trim();
    if (todoTitle && todoTitle !== ''){
      onAddTodo(todoTitle)
      setWorkingTodoTitle ("")
     // event.target.reset()
      inputRef.current.focus()
    }


  }
    return (
      <form onSubmit={handleAddtodo}>
        <TextInputWithLabel
          elementId="todoTitle"
          labelText="Todo"
          onChange={(event) => setWorkingTodoTitle(event.target.value)}
          ref={inputRef}
          value={workingTodoTitle}
        />
        {/*
        <label htmlFor="todoTitle">Todo</label>
        <input
          id="todoTitle"
          type="text"
          ref={inputRef}
          name="todoTitle"
          placeholder={"Todo text"}
          value={workingTodoTitle}
          onChange ={(event) => setWorkingTodoTitle(event.target .value)}
          required
        />
        */}
        <button type="submit" disabled={!isValidTodoTitle(workingTodoTitle)}>
          Add Todo
        </button>
      </form>
    );
}