import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from './Home'
import Login from './Login'


export const ProtectedRoutes = () => {
    const isAuth = () => {
        return true
    }
    const auth = isAuth();
    return auth ? <Outlet/> : <Navigate to="/login" />
}

export const ProtectedUserAuth = () => {
    const isAuth = () => {
        const admin = "user"
        return admin == "admin"
    }
    const auth = isAuth();
    return auth ? <Outlet/> : <Navigate to="/" />
}

export const ProtectedLoggedin = () => {
    const isAuth = () => {
        return true;
    }
    const auth = isAuth();
    return auth ? <Navigate to="/" /> : <Outlet/>
}