import React, {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Redirect } from 'react-router'
import {loginFunction} from "../../store/features/authThunk"

const Login = (props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    return (
        <div>
            {auth.isAuth
            ? <Redirect to={"/dashboard"} />
            : (
                <>
            <h3>Login form</h3>
            <div>
                <p>Логин <input type="text" onChange={e=>setLogin(e.target.value)} /></p>
                <p>Пароль <input type="text" onChange={e=>setPassword(e.target.value)} /></p>
                <button onClick={
                    ()=>dispatch(loginFunction(login, password))
                }>Войти</button>
            </div>
            </>
            )}
        </div>
    )
}

export default Login
