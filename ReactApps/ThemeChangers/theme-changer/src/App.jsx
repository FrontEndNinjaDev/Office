import './App.css'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import ThemeProvider from './Components/ThemeProvider'
import ToggleTheme from './Components/ToggleTheme'

function App() {

  const links = ["Home" , "Nav" , "About" ]

  return (
   <ThemeProvider>
    <Navbar links={links}/> 
    <Main content = 'Hello Kali Linux'/>
    <ToggleTheme/>
   </ThemeProvider>
  )
}

export default App
