export default function TodoForm() {
  
    return (
      <form>
        <label htmlFor="todoTitle">Todo</label>
        <input id="todoTitle" type="text" />
        <button type="submit" disabled>
          Add Todo
        </button>
      </form>
    );
}