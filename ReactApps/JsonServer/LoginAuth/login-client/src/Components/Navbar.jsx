


import React from "react";
import { NavLink } from "react-router-dom";
import SearchUser from "./SearchUser";

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            <i className="fas fa-blog"></i> Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            <i className="fas fa-project-diagram"></i> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            <i className="fas fa-info-circle"></i> About Us
          </NavLink>
        </li>
        <li>
          <SearchUser />
        </li>

        {!isAuthenticated ? (
          <>
            <li>
              <NavLink to="/login" activeClassName="active">
                <i className="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active">
                <i className="fas fa-user-plus"></i> Signup
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/user-profile" activeClassName="active">
                <i className="fa-regular fa-id-badge"></i> Profile
              </NavLink>
            </li>
            <li>
              <button onClick={onLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
