import { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducers";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [storedTodos, setStoredTodos] = useLocalStorage("todos", []);

  const [todos, dispatch] = useReducer(todoReducer, storedTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch, setStoredTodos }}>
      {children}
    </TodoContext.Provider>
  );
};