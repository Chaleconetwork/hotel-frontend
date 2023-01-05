import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';
import { UserProvider } from '../utils/context/userContext';

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter();
    const navbarhidden = router.pathname === '/' ? false : true;

    return (
        <UserProvider>
            {navbarhidden && <Navbar />}
            <Component {...pageProps} />
        </UserProvider>
    )
}
