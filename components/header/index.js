import styles from './index.module.css'
import router from 'next/router'

const Header = () => {
    return <header className={styles.header}>
        <img onClick={()=>router.push('/')} src="/marvel.svg" alt="logo" className={styles.logo}/>
    </header>
}

export default Header