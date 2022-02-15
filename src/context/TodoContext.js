import { createContext } from "react";

const TodoContext = createContext({ todo: [], setTodo: () => {} });

export default TodoContext;
