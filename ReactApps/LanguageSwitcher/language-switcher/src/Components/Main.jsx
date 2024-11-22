import React, { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'

const Main = () => {
    const {translations} = useContext(LanguageContext)
  return (
    <div>
        <h1>{translations.greeting}</h1>
        <p>This is the main content area.</p>
    </div>
  )
}

export default Main