import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-gray-500">
        Hello Kali Linux
      </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
 