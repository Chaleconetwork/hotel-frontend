import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';
import { UserProvider } from '../utils/context/userContext';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter();
    const navbarhidden = router.pathname === '/' ? false : true;

    const { asPath } = useRouter();
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        setUrl(asPath);
    }, [asPath]);

    return url?
    (
        <UserProvider>
            {navbarhidden && <Navbar />}
            <Component {...pageProps} />
        </UserProvider>
    ): null
}