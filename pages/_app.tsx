import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter();    
    const navbarhidden = router.pathname === '/' ? false : true;

    return (
        <Fragment>
            {navbarhidden && <Navbar />}
            <Component {...pageProps} />
        </Fragment>
    )
}
