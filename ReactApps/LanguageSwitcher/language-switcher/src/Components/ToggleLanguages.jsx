import React, { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'

const ToggleLanguages = () => {
  const {handleLanguages} = useContext(LanguageContext)
  return (
    <div>
      <button onClick={()=>handleLanguages('en')}>English</button>
      <button onClick={()=>handleLanguages('es')}>Spanish</button>
      <button onClick={()=>handleLanguages('fr')}>French</button>
    </div>
  )
}

export default ToggleLanguages