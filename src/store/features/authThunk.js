import {loaded, loading} from "./loading"
import {login, logout} from "./auth"
import {auth} from "../../axios"

export const loginFunction = (username, password) => {
    return async (dispatch) => {
        dispatch(loading())
        try {
            const data = await auth(username, password)
            // if(!data?.tokens.accessToken.length){
                // dispatch(loaded())
                // alert("Логин или пароль не верны")
                // return {}
            // }
            console.log(data?.tokens?.accessToken)
            localStorage.setItem("accessToken", data?.tokens?.accessToken)
            localStorage.setItem("refreshToken", data?.tokens?.refreshToken)
            dispatch(login({user:data?.user, tokens:data?.tokens}))
        }catch(e){
            console.log(e)
            return {}
        }
        dispatch(loaded())
    }
}

export const logoutFunction = () => {
    return async (dispatch) => {
        dispatch(loading())
        localStorage.setItem("accessToken", "")
        localStorage.setItem("refreshToken", "")
        dispatch(logout())
        dispatch(loaded())
    }
}
