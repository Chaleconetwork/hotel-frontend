import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Header from './Header'
import { useContext } from 'react';
import { Auth, UserContext } from '../utils/context/userContext';
import Router from 'next/router';

export default function Navbar() {

    const usuarioContext = useContext(UserContext);
    const [isAuth, setIsAuth] = [usuarioContext?.isAuthContext[0], usuarioContext?.isAuthContext[1]];

    function handleLogout() {
        setIsAuth(false);
        Auth.delete();
        Router.push('/');
    }

    return (
        <>
            {
                isAuth && <Header />
            }
            
            <div className={styles.navbar}>
                <Link href="/dashboard"><div>Dashboard</div></Link>
                <Link href="/rooms"><div>Habitaciones</div></Link>
                <Link href="/"><div>Productos</div></Link>
                <Link href="/"><div>Clientes</div></Link>
                <Link href="/users"><div>Usuarios</div></Link>
                <Link href="/"><div>Ventas</div></Link>

                {
                    isAuth && <div className='btnLogOut' onClick={handleLogout}>Cerrar sesión</div>
                }
            </div>
        </>
    )
}
