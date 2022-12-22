import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <Link href="/dashboard"><div>Dashboard</div></Link>
                <Link href="/rooms"><div>Habitaciones</div></Link>
                <Link href="/"><div>Productos</div></Link>
                <Link href="/"><div>Clientes</div></Link>
                <Link href="/"><div>Usuarios</div></Link>
                <Link href="/"><div>Ventas</div></Link>
                <Link href="/"><div>Cerrar sesión</div></Link>
            </div>
        </>
    )
}
