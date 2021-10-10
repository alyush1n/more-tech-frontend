import {loaded, loading} from "./loading"
import {login, logout} from "./auth"
import {auth} from "../../axios"

export const loginFunction = (username, password) => {
    return async (dispatch) => {
        dispatch(loading())
        try {
            const data = await auth(username, password)
            if(data?.tokens == {}){
                return {}
            }
            dispatch(login({user:data?.user, tokens:data?.tokens}))
        }catch(e){
            console.log(e)
            return {}
        }
        dispatch(loaded())
    }
}
