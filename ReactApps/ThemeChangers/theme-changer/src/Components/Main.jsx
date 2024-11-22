import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Main = ({content}) => {
    const { theme }= useContext(ThemeContext)
  return (
    <div>
        <div className={theme === 'light' ? 'main-dark' : 'main-light' }>
            <h1>{content}</h1>
        </div>
    </div>
  )
}

export default Main