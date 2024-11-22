import './App.css'
import ChangingUi from './ChangingUi'
import UserContext from './UserContext'

function App() {

  return (
    <>
    <h1 style={{textAlign : "center"}}>Changing Ui</h1>
    <UserContext>
      <ChangingUi/>
    </UserContext>
    </>
  )
}

export default App
