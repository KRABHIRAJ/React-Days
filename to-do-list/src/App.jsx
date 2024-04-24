
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
      setTodos((prev) => [todo, ...prev])
  }

  const deleteTodo = (id) => {
    const filteredtodo = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredtodo]);
  }

  const toggleTodo = (id) => {
    const modifiedTodos = todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
    })

    setTodos([...modifiedTodos]);
  }

  const updateTodo = (todo, id) => {
    const updatedTodos = todos.map((item) => {
      if(item.id === id){
        item.todo = todo;
      }
      return item;
    })

    setTodos([...updatedTodos]);
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(localTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return (
    <>
    <TodoProvider value={{todos, addTodo, deleteTodo, toggleTodo, updateTodo}}>
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
      </TodoProvider>
    </>
  )
}

export default App
