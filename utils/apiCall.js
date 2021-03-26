import axios from 'axios'


export const getCharacters = async ( query ) => {
    let data = null
    try {
        const res = await axios(query)
    if (res.status !== 200) {
        throw new Error("Failed to fetch")
    }
        data = await res.data
    } catch (err) {
        data = { error: { message: err.message } }
    }
    return {
        data 
    }
}

export default getCharacters