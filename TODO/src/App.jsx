import { useReducer, useState, useEffect } from "react"
import { todoReducer } from "./reducers/todoReducers"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter"
import SearchBar from "./components/SearchBar"

function App() {

  const [todos, dispatch] = useReducer(todoReducer, [])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"))

    if (savedTodos && savedTodos.length > 0) {
      dispatch({
        type: "LOAD_TODOS",
        payload: savedTodos
      })
    }

  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    dispatch({
      type: "ADD_TODO",
      payload: text
    })
  }

  const deleteTodo = (index) => {
    dispatch({
      type: "DELETE_TODO",
      payload: index
    })
  }

  const toggleComplete = (index) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: index
    })
  }

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED"
    })
  }

  const filteredTodos = todos
    .filter(todo =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter(todo => {
      if (filter === "completed") return todo.completed
      if (filter === "pending") return !todo.completed
      return true
    })

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">

      <div className="w-[420px] bg-white p-6 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Todo App
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <TodoInput addTodo={addTodo} />

        <TodoFilter
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />

        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />

      </div>

    </div>

  )
}

export default App