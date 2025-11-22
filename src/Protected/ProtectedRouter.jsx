import { Navigate } from "react-router-dom";

export default function ProtectedRouter({children}){
    const isAuth = JSON.parse(localStorage.getItem('token'));

    if(!isAuth){
        return <Navigate to={'/login'} />
    }

    return children;
}