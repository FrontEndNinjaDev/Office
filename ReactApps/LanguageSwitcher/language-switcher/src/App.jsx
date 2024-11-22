import './App.css'
import Footer from './Components/Footer'
import LanguageProvider from './Components/LanguageProvider'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import ToggleLanguages from './Components/ToggleLanguages'

function App() {

  const links = ["home" , "about" , "contact"]

  return (
  <LanguageProvider>
    <Navbar links={links}/>
    <Main/>
    <ToggleLanguages/>
    <Footer/>
  </LanguageProvider>
  )
}

export default App
