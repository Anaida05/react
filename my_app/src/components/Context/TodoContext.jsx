import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        todos: [...state.todos, { id: Date.now, text: action.payload }],
      };
    default:
      return state;
  }
};

const InitialState = { todos: [] };

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, InitialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
