import { createContext, useState } from 'react';
import iUser from '../interface/iUser';

interface iContext {
    isAuthContext: [isAuth: boolean, setIsAuth: any];
}

const _item = 'auth';
export const UserContext = createContext<iContext | null>(null);

export const UserProvider = (props: any) => {
    const [isAuth, setIsAuth] = useState<boolean>(Auth.get() ? true : false);

    return (
        <UserContext.Provider value={{
            isAuthContext: [isAuth, setIsAuth],
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export const Auth = {
    set(data: iUser): void {
        const userData = {
            id: data.id,
            username: data.username,
            rol: data.rol,
            status: data.status,
            token: data.token
        };

        let parsedData = JSON.stringify(userData);
        localStorage.setItem(_item, parsedData);
    },

    get(): iUser | null {
        if (typeof window !== 'undefined') {
            let data = localStorage.getItem(_item);
            
            if (!data) {
                return null;
            }

            let dataJson = JSON.parse(data);
            return dataJson;
        } else {
            return null;
        }
    },

    delete(): void {
        localStorage.removeItem(_item);
    },
}