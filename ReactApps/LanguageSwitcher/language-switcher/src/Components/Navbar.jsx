import { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'

const Navbar = ({links}) => {
    const { translations } = useContext(LanguageContext)
  return (
   <nav>
    <ul>
        {
            links.map((link,index)=>(
                <li key={index}>{translations[link]}</li>
            ))
        }
    </ul>
   </nav>
  )
}

export default Navbar