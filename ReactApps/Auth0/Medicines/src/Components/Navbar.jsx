// import React, { useState } from "react";
// import Home from "./Home";
// import { NavLink } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const Navbar = () => {

//   const [showInfo, setShowInfo] = useState(false);

//   const { loginWithRedirect, logout, isAuthenticated, user , isLoading } = useAuth0();



//   if(isLoading){
//       <div>Loading...</div>
//   }

//   const ToggleInfo=()=>{
//       setShowInfo(!showInfo)
//   }

//   return (
//     <>
//       <header>
//         <nav className="navbar">
//           <a href="#" className="logo">
//             MedStore
//           </a>
//           <ul class="nav-links">
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/products">Products</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About Us</NavLink>
//             </li>

//             {isAuthenticated ? (
//               <li>
//                 <button className="btn"
//                   onClick={() =>
//                     logout({
//                       logoutParams: { returnTo: window.location.origin },
//                     })
//                   }
//                 >
//                   Log Out
//                 </button>
//               </li>
//             ) : (
//               <li>
//                 <button className="btn" onClick={() => loginWithRedirect()}>SignUp</button>
//               </li>
//             )}
//            {
//              isAuthenticated && (
//               <div className='show-user'>
//               <img src = {user.picture}
//               className="user-img"
//               onClick={ToggleInfo}
//               />
//               <div className={`user-info ${showInfo ? 'visible' : true}`}></div>
//               <p>{user.name}</p>
//               <p>{user.email}</p>
//               </div>
//           )
//            }
//           </ul>
//         </nav>
//         <Home />
//       </header>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import Home from "./Home";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <a href="#" className="logo">
            MedStore
          </a>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>

            {isAuthenticated ? (
              <li>
                <button
                  className="btn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button className="btn" onClick={() => loginWithRedirect()}>
                  Sign Up
                </button>
              </li>
            )}

            {isAuthenticated && (
              <li className="show-user">
                <img
                  src={user.picture}
                  alt="User Profile"
                  className="user-img"
                  onClick={toggleInfo}
                />
                {showInfo && (
                  <div className="user-info">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.gender}</p>
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>
        <Home />
      </header>
    </>
  );
};

export default Navbar;
