import styles from './index.module.css'

export default function Card({ src, name, ...props }) {
    return (
        <div className={styles.card}>
            <img src={src} alt={name} className={styles.characterImage} />
            <h2 className={styles.characterName}>{name}</h2>
        </div>
    )
}