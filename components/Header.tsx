import styles from '../styles/Header.module.css'
import { Auth } from '../utils/context/userContext'

export default function Header() {

    const userName = Auth?.get()?.username ?? '';

    return (
        <div className={styles.header}>
            <span>Usuario: {userName}</span>
        </div>
    )
}
