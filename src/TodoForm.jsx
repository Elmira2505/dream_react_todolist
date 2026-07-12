


export default function TodoForm() {
  //  const [task, setTask] = useState('')
    return (
      <>
        <form className="form">
          <label htmlFor="todoTitle">TO do:</label>
          <input id="todoTitle" type="text" placeholder="Input task" />
          <button type="submit" disabled>
            Add Todo
          </button>
        </form>
      </>
    );
}