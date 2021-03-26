import { useRouter } from 'next/router'
import styles from './index.module.css'

import Image from '../../utils/image'

export default function Card({ src, name, id, ...props }) {
    const router = useRouter()
    
    const detail = () => {
        router.push(`character/${id}`)
    }
    if(src == null || name == null || id == null) return null;
    return (
        <div className={styles.card} onClick={detail}>
            <Image src={src} alt={name} className={styles.characterImage} />
            <h2 className={styles.characterName}>{name}</h2>
        </div>
    )
}