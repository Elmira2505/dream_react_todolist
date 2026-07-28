import {useRef} from 'react'


export default function TodoForm({onAddTodo}) {
  const inputRef = useRef()
  const handleAddtodo = (event)=> {
    event.preventDefault()
    console.log('event Obj', event)
    console.log('event target', event.target)
    console.log('input value', event.target.todoTitle.value)
    const todoTitle= event.target.todoTitle.value.trim()
    if (todoTitle && todoTitle !== ''){
      onAddTodo(todoTitle)
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
               required
                />
        <button type="submit" >
          Add Todo
        </button>
      </form>
    );
}