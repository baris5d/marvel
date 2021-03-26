import { useRouter } from 'next/router'
import styles from './index.module.css'

export default function Card({ src, name, id, ...props }) {
    const router = useRouter()
    
    const detail = () => {
        router.push(`character/${id}`)
    }
    return (
        <div className={styles.card} onClick={detail}>
            <img src={src} alt={name} className={styles.characterImage} />
            <h2 className={styles.characterName}>{name}</h2>
        </div>
    )
}