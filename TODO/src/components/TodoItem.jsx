function TodoItem({ todo, index, toggleComplete, deleteTodo }) {

  return (

    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}
          className="w-4 h-4"
        />

        <span
          className={`${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>

      </div>

      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 hover:text-red-600"
      >
        Delete
      </button>

    </li>

  )
}

export default TodoItem