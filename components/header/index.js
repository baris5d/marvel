import styles from './index.module.css'

const Header = () => {
    return <header className={styles.header}>
        <img src="marvel.svg" alt="logo" className={styles.logo}/>
    </header>
}

export default Header