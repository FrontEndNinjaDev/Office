import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
     <h1 className='bg-red-500 text-3xl font-extrabold'>hello Redux-Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
