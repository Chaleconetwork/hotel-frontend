import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import wave from '../assets/svg/wave.svg'

export default function Home() {
    return (
        <div>
            {/* <svg className='svgDesign' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,165.3C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
            <Login />
        </div>
    )
}
