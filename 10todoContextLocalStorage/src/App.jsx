import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './Components/TodoFrom';
import TodoItem from './Components/TodoItems';

function App() {
  const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {

    setTodos((prev) => [{id:Date.now(),...todo},...prev])
    }

    const updateTodo = (id,todo) => 
    {
        setTodos((prev) => prev.map((prevTodo) =>
        (prevTodo.id ===id ? todo : prevTodo))) /// if else case 
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo)=>todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))
    }

    useEffect(() => {

       const todos = JSON.parse( localStorage.getItem("todos"))

       if(todos && todos.length >0){
        setTodos(todos)
       }
       
    }, [])

    useEffect( () => {

        localStorage.setItem("todos",JSON.stringify(todos))
    } ,[todos])
    
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     
    <div className="bg-[#172842] w-full h-[90vh] md:w-[80vw] md:h-[90vh] py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <div className="text-[1.75rem] md:text-4xl  font-bold text-center mb-8 mt-2  text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">Manage Your To-Dos</div>
                    <div className="mb-13 md:mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                      {todos.map((todo) => (
                        <div className="w-full"
                            key={todo.id}>

                                <TodoItem todo={todo}/>
                            </div>
                      ))}
                    </div>
                </div>
            </div>

            </TodoProvider>
  )
}






export default App


