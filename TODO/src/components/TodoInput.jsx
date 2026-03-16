import { useState } from "react"

function TodoInput({ addTodo }) {

  const [input, setInput] = useState("")

  const handleAdd = () => {
    if (!input.trim()) return
    addTodo(input)
    setInput("")
  }

  return (

    <div className="flex gap-2 mb-4">

      <input
        className="flex-1 border border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>

    </div>

  )
}

export default TodoInput