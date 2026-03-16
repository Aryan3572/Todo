import { useState } from "react"

function TodoFilter({ setFilter, clearCompleted }) {

  const [active, setActive] = useState("all")

  const handleFilter = (type) => {
    setFilter(type)
    setActive(type)
  }

  return (

    <div className="flex justify-between items-center mb-3">

      <div className="flex gap-2">

        <button
          onClick={() => handleFilter("all")}
          className={`px-3 py-1 rounded ${
            active === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => handleFilter("completed")}
          className={`px-3 py-1 rounded ${
            active === "completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Completed
        </button>

        <button
          onClick={() => handleFilter("pending")}
          className={`px-3 py-1 rounded ${
            active === "pending"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Pending
        </button>

      </div>

      <button
        onClick={clearCompleted}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Clear
      </button>

    </div>

  )
}

export default TodoFilter