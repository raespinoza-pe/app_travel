import { useCallback, useContext } from "react"
import { authenticatedUser } from '../api/usuarioApi';
import Context from "../context/UserContex"

export default function useUser() {

    const { token, setToken } = useContext(Context)

    const login = useCallback(async (email, password) => {
        let tk_login = await authenticatedUser(email, password)
        setToken(tk_login)
    }, [setToken])


    return {
        islogged : Boolean(token),
        getToken : Boolean(localStorage.getItem('token')),
        login,

    }

}