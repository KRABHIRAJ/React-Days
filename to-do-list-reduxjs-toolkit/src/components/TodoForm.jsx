import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm() {
    const [todoMsg, setTodoMsg] = useState('');
    const dispatch = useDispatch();
    const addCurrTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todoMsg))
        setTodoMsg('');
    }
    return (
        <form  className="flex">
            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" onClick={addCurrTodo} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;