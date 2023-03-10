import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";
import React, { ChangeEvent, useContext, useState } from 'react';
import Router from 'next/router';
import { Fetch } from '../utils/api/fetch'
import { Auth, UserContext } from '../utils/context/userContext';
import iUser from '../utils/interface/iUser';

interface iFormData {
    username: string;
    password: string;
}

export default function Login() {

    const usuarioContext = useContext(UserContext);
    const [isAuth, setIsAuth] = [usuarioContext?.isAuthContext[0], usuarioContext?.isAuthContext[1]];

    const [user, setUser] = useState<iFormData>({ username: '', password: '' });
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleClick(e: any) {
        e.preventDefault();

        const dto = {
            username: user.username,
            password: user.password
        }

        const url = 'http://localhost:5107/api/Auth/loginUser'
        const response = await Fetch.postApi(url, dto) as iUser;
        
        if (!response) {
            return false;
        }

        if (response.isError) {
            alert(response.messageError);
            return false;
        }

        Auth.set(response); //Localstorage 
        setIsAuth(true); //Context
        Router.push('/dashboard');
    }

    return (
        <div className={styles.container}>
            <motion.form
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <h2>Iniciar Sesión</h2>
                <div className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <input className={styles.formInput} type='text' name='username' onChange={handleChange} placeholder=' ' />
                        <label className={styles.formLabel} htmlFor="user">Usuario</label>
                        <span className={styles.formLine}></span>
                    </div>
                    <div className={styles.formGroup}>
                        <input className={styles.formInput} type='password' name='password' onChange={handleChange} placeholder=' ' />
                        <label className={styles.formLabel} htmlFor="">Contraseña</label>
                        <span className={styles.formLine}></span>
                    </div>
                    <div className={styles.formGroup}>
                        <input className={styles.formSubmit} type="submit" onClick={handleClick} value='Entrar' />
                    </div>
                </div>
                <p>¿Olvidó su contraseña?</p> <Link href="/"><p className={styles.clickaqui}>Click aquí</p></Link>
            </motion.form>
        </div>
    )
}
