import { useState, useEffect } from 'react'
import ContentLoader from 'react-content-loader'


const Image = ({src, alt, className, ...props}) => {
    const [ imageSrc, setImageSrc ] = useState(src)
    const [ loaded, setLoaded ] = useState(false)

    return(
    <>
        <img src={imageSrc} onLoad={() => setLoaded(true) } onError={() => setImageSrc("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg")} alt={alt} className={[className, "z-0"]} />
        { !loaded ? <ContentLoader 
            speed={4}
            width={224.5}
            height={336.75}
            viewBox="0 0 300 450"
            backgroundColor="#374151"
            foregroundColor="#1f2937"
            className="z-10 absolute t-0"
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
        </ContentLoader> : '' }
    </>
    )
}

export default Image