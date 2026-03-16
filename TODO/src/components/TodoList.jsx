import TodoItem from "./TodoItem"

function TodoList({ todos, toggleComplete, deleteTodo }) {

  return (

    <ul className="space-y-2">

      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}

    </ul>

  )
}

export default TodoList