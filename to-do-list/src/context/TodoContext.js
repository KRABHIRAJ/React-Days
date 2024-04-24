import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: () => {},
    toggleTodo: () => {},
    updateTodo: () => {}
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}