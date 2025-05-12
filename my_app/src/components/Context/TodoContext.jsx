import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
export const TodoContext = createContext();

const initialState = [];

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "FetchTodos":
      return action.payload;

    case "AddTodo":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case "RemoveTodo":
      return state.filter((todo) => todo.id !== action.payload);
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        dispatch({ type: "FetchTodos", payload: response.data});
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
