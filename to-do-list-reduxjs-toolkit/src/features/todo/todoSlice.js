import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const currTodo = {
                id: nanoid(),
                completed: false,
                todo: action.payload
            }

            state.todos.push(currTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => action.payload !== todo.id);
        },
        toggleCompletion: (state, action) => {
            state.todos.forEach((todo) => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
            })
        },
        updateTodo: (state, action) => {
            state.todos.forEach((todo) => {
                if(todo.id === action.payload.id){
                    todo.todo = action.payload.todo
                }
            })
        }
    }
})

export const {addTodo, removeTodo, toggleCompletion, updateTodo} = todoSlice.actions

export default todoSlice.reducer;
