import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'

const Footer = () => {
    const {translations} = useContext(LanguageContext)
  return (
    <div>
        <h3>{translations.footer}</h3>
    </div>
  )
}

export default Footer