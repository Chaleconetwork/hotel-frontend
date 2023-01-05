import React, { useEffect, useState } from 'react'
import SectionBar from '../components/SectionBar'
import { Fetch } from '../utils/api/fetch'
import iUser from '../utils/interface/iUser';

export default function Users() {

    const [users, setUsers] = useState<iUser[]>([]);
    async function getUsers() {
        const url = 'http://localhost:5107/api/User/getUsers'
        const response = await Fetch.getApi(url);

        if (response.isError) {
            alert(response.messageError);
            return false;
        }

        setUsers(response);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <SectionBar name='Usuarios' />
            <div className='containerMain'>
                {
                    users.map((i:iUser) => (
                        <div key={i.id}>
                            {i.id} <br />
                            {i.username} <br />
                            {i.rol} <br />
                            {i.status}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
