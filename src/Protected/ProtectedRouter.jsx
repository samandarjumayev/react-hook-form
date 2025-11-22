import { Navigate } from "react-router-dom";

export default function ProtectedRouter({children}){
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));

    if(!isAuth){
        return <Navigate to={'/login'} />
    }

    return children;
}