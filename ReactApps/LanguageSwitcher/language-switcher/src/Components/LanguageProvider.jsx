import React, { useState } from 'react'
import { createContext } from 'react';

export const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
    const translations = {
        en: {
          greeting: "Hello",
          home: "Home",
          about: "About",
          contact: "Contact",
          footer: "All rights reserved.",
        },
        es: {
          greeting: "Hola",
          home: "Inicio",
          about: "Acerca de",
          contact: "Contacto",
          footer: "Todos los derechos reservados.",
        },
        fr: {
          greeting: "Bonjour",
          home: "Accueil",
          about: "À propos",
          contact: "Contact",
          footer: "Tous droits réservés.",
        },
      };
      const [language, setLanguage] = useState('en');

      const handleLanguages = (lang) =>{
        setLanguage(lang)
      }
  return (
    <LanguageContext.Provider value={{language , handleLanguages , translations : translations[language]}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider