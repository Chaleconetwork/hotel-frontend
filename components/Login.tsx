import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Login() {
    return (
        <div className={styles.container}>

            <motion.form action="/main" 
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
                        <input className={styles.formInput} type="text" placeholder=' ' />
                        <label className={styles.formLabel} htmlFor="">Usuario</label>
                        <span className={styles.formLine}></span>
                    </div>
                    <div className={styles.formGroup}>                        
                        <input className={styles.formInput} type="password" placeholder=' ' />
                        <label className={styles.formLabel} htmlFor="">Contraseña</label>
                        <span className={styles.formLine}></span>
                    </div>
                    <div className={styles.formGroup}>
                        <input className={styles.formSubmit} type="submit" value='Entrar' />
                    </div>
                </div>
                <p>¿Olvidó su contraseña?</p> <Link href="/"><p className={styles.clickaqui}>Click aquí</p></Link>
            </motion.form>
        </div>
    )
}
