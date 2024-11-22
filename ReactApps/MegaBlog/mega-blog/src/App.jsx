import "./App.css";
import conf from "./conf/conf";
import { useDispatch } from "react-redux";
import  authService  from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { useEffect, useState } from "react";
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

// ^  FOR ACCESSING THE ENV FILE WITH CREATE-REACT-APP
// ^ console.log(process.env.REACT_APP_APPWRITE_URL);

// ^ FOR ACCESSING THE ENV FILE WITH CREATE-REACT-APP
// !  FOR ACCESICING THE FILE IN .ENV WE SHOULD MAKE IT IN THE DIRECTORY

//  console.table(conf,);

function App() {
  // ^ making it true because we are giving it false in useeffect

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
     <div className="w-full block">
      <Header />
      <Footer/>
      <main>
        {/* <Outlet/> */}
      </main>
     </div>
    </div>
  ) : null;
}

export default App;
