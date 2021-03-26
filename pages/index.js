import { useState } from 'react'
import Header from '../components/header'
import md5 from 'js-md5';
import getCharacters from '../utils/apiCall'
import AppConfig from '../app.config'

import CardList from '../components/cardList'
import { Waypoint } from 'react-waypoint';



const HomePage = ({ characterData }) => {
  const [ characters, setCharacters ] = useState(characterData.data.data.results)
  const [ isLoading, setIsLoading ] = useState(false)
  const limit = AppConfig.ITEMS_PER_PAGE
  const [ hasNextPage, setHasNextPage ] = useState(true)
  const [ page, setPage ] = useState(1)
  

  const loadMore = async () =>  {
    if(!hasNextPage) return;
    setIsLoading(true)
    const query = `${AppConfig.API_GATEWAY}characters?apikey=${AppConfig.API_KEY}&limit=${limit}&offset=${page*limit}`
    const newCharacters = await getCharacters(query)
    setPage(page + 1)
    setCharacters([...characters, ...newCharacters.data.data.results])
    setIsLoading(false)
    if( page*limit >= newCharacters.data.data.total) setHasNextPage(false)
  }
  
  
  return (
    <div className="container mx-auto pt-6">
      <Header />
      <div className="grid grid-cols-6 gap-6 pt-12 pb-12">
        <CardList data={characters} />
      </div>
      <div className="grid py-12">
        {isLoading && hasNextPage ? <img src="loading.gif" alt="loader" className="place-self-center w-12" /> : <Waypoint onEnter={loadMore}></Waypoint>}
      </div>
    </div>
  )
}
export const getServerSideProps = async ({ context }) => {
  const page = 1
  const limit = AppConfig.ITEMS_PER_PAGE

  let characterData = null
  const ts = Number(new Date());
  const hash = md5.create();

  hash.update(ts + process.env.PRIVATE_KEY + AppConfig.API_KEY);

  const query = `${AppConfig.API_GATEWAY}characters?ts=${ts}&hash=${hash}&apikey=${AppConfig.API_KEY}&limit=${limit}&offset=${page}`
  characterData = await getCharacters(query)
  return { props: { characterData } }
}
export default HomePage