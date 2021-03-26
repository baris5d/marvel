import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from "next/router"

import styles from './index.module.css'
import Card from '../card'

const CardList = ({data}) => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
      if (data) {
        if (data.error) {
        } else {          
          setCharacters(data)
        }
      }
    }, [data])
  
      return(
        <>
            {characters.map((character, i) => 
              <Card src={character.thumbnail.path+"/portrait_uncanny.jpg"} name={character.name} id={character.id} key={i}/>
            )}
        </>
      )
}


export default CardList