import React from 'react'
import {useSelector} from "react-redux"
import {Redirect} from "react-router-dom"

const Guard = (props) => {
    const auth = useSelector(state=>state.auth)
    console.log(auth.isAuth)
    if(auth.isAuth){
        return props.children
    }
    return <Redirect to={"/"} />
}

export default Guard
