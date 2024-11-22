import React, { useState } from 'react'
import Button from './Button'

const JokeGen = () => {

const [joke, setJoke] = useState("")

const fetchApi =() =>{
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res)=> res.json())
    .then((data)=>setJoke(data.joke))
    .catch((error)=> console.log(error))
}

  return (
    <div className="joke">
        <Button callApi={fetchApi}/>
        <h2>{joke}</h2>
    </div>
  )
}

export default JokeGen