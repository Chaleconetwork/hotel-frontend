import styles from '../styles/Room.module.css'
import SectionBar from '../components/SectionBar'

export default function rooms() {
    return (
        <>
            <SectionBar name='Habitaciones' />
            <div className='containerMain'>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>N° de habitación</th>
                            <th>Categoria</th>
                            <th>Máximo personas</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>24</td>
                            <td>Familiar</td>
                            <td>2</td>
                            <td>$10.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
