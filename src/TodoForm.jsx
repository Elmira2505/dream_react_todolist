export default function TodoForm() {
  //  const [task, setTask] = useState('')
    return (
      <>
        <form>
          <label htmlFor="todoTitle">Todo</label>
          <input id="todoTitle" type="text" />
          <button type="submit" disabled>
            Add Todo
          </button>
        </form>
        </>
    );
}