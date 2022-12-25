import React, { useEffect, useState } from 'react'
import SectionBar from '../components/SectionBar'

export default function users() {

    // const [dato, setDato] = useState<any[]>([]);
    // async function getUsers() {
    //     try {
    //         const url = await fetch('http://localhost:5107/api/User');
    //         const response = await url.json();
    //         setDato(response);
    
    //         console.log(dato);
    //     }catch (e) {

    //     }
    // }

    useEffect(() => {
        // getUsers();
    }, [])

    if (dato.length == 0) {
        return (
            <div>
                <h2>Cargando...</h2>
            </div>
        );
    }

    return (
        <>
            <SectionBar name='Usuarios' />
            <div className='containerMain'>
                {/* Usuarios <br />
                {
                    dato.map(i => (
                        <div key={i.id}>
                            {i.username} <br />
                            {i.rol} <br />
                            {i.status}
                        </div>
                    ))
                } */}
            </div>
        </>
    )
}
