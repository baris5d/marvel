import { useState, useEffect } from 'react'
import md5 from 'js-md5';
import getInfo from '../../utils/apiCall'
import AppConfig from '../../app.config'
import Header from '../../components/header'
import { useRouter } from 'next/router'
import { ArrowBackCircleOutline } from 'react-ionicons'


const CharacterInfo = ({ characterData, comicDetail }) => {
    const [ character, setCharacter ] = useState(characterData.data.data.results[0])
    const [ comics, setComics ] = useState(comicDetail.data.data.results)
    const router = useRouter()
    return (
        <div className="sm:container mx-auto grid justify-items-center p-4 sm:p-1">
            <div className="w-full flex place-items-center gap-4 pt-6">
                <span className="cursor-pointer" onClick={() => router.back()}><ArrowBackCircleOutline color="#fff" width="50px" height="50px"/></span>
                <Header />
            </div>
            <div className="max-w-7xl grid sm:grid-cols-4 grid-cols-2 gap-4 mt-12 p-4 md:p-12 bg-gray-700 rounded-lg shadow-xl">
                <div className="col-auto">
                    <img src={character.thumbnail.path+"/portrait_uncanny.jpg"} alt = {character.name} />
                </div>
                <div className="col-span-3">
                    <h1>{character.name}</h1>
                    <p>{character.description || "No description"}</p>
                    <h2 className="text-xl mt-6 mb-4">Comics</h2>
                    <section className="grid md:grid-cols-2 grid-cols-1">
                        { comics.map((comic,i) => {
                            return <div key={i} className="grid grid-cols-4 gap-2 pr-2 pb-6">
                                <div className="col-span-1">
                                    <img src={comic.thumbnail.path+"/standard_medium.jpg"} className="place" />
                                </div>
                                <div className="col-span-3 pl-2">
                                    <p>{comic.title}</p>
                                    <small>{new Date(comic.dates[0].date).getFullYear()}</small>
                                </div>
                            </div>
                        })}
                        {comics.length < 1 ? <p>There's no Comics since 2005</p> : ''}
                    </section>
                </div>
            </div>
        </div>
    )
}
  
export const getServerSideProps = async ( context ) => {
    let characterData = null
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + process.env.PRIVATE_KEY + AppConfig.API_KEY);
  
    const query = `${AppConfig.API_GATEWAY}characters/${context.query.name}?ts=${ts}&hash=${hash}&apikey=${AppConfig.API_KEY}`
    characterData = await getInfo(query)

    const comicQuery = `${AppConfig.API_GATEWAY}characters/${context.query.name}/comics?dateRange=2005-01-01,${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}&ts=${ts}&hash=${hash}&apikey=${AppConfig.API_KEY}&orderBy=-onsaleDate&limit=10`
    const comicDetail = await getInfo(comicQuery)

    return { props: { characterData, comicDetail } }
  }

export default CharacterInfo