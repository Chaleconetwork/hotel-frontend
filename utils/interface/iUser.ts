export default interface iUser {
    id: number,
    username: string,
    rol: string,
    status: boolean,
    token: string,
    isError: boolean,
    messageError: string
}