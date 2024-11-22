import React, { createContext, useState } from 'react'

 export const userContextUi = createContext()

const UserContext = ({children}) => {
    console.log('user context rendered');
    const ChangingNames = [
        'Html',
        'Css',
        'JavaScript',
        'React',
        'React-redux',
        'Express-js',
        'Node-js',
        'Mongo-Db',
        'Next-js'
    ] 

    const [array, setArray] = useState(null);

    const clickHandler = () =>{
        if(array < ChangingNames.length){
            setArray(array + 1)
        }
    }


  return (
    <userContextUi.Provider value={{ChangingNames , array , clickHandler}}>
        {children}
    </userContextUi.Provider>
  )
}

export default UserContext