import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Navbar = ({ links }) => {

    const {theme} = useContext(ThemeContext)

  return (
    <nav className={theme === 'light' ? 'navbar-light' : 'navbar-dark'}>
        <ul>
            {
                links.map((link,index)=>(
                    <li key={index}>{link}</li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar