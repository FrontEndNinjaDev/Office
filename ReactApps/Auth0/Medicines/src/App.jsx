import { BrowserRouter , Routes , Route } from 'react-router-dom'

import './App.css'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navbar/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
