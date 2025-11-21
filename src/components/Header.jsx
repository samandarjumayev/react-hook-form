import { ArrowRight, Code2, MoveRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return <div className="bg-[#080720] w-full h-[70px] text-white">
        <div className="h-full max-w-[1000px] mx-auto flex items-center justify-between">
            <div className="flex h-full items-center justify-between gap-2">
                <Code2 color="cyan" size={37} />
                <p className="font-semibold text-xl">Samandar<span className="text-cyan-300">/</span></p>
            </div>

            <div className="h-full flex items-center gap-7 text-[18px]">
                <NavLink to={'/'} className={({isActive}) => isActive ? `text-cyan-300` : ``}>Home</NavLink>
                <NavLink to={'/about'} className={({isActive}) => isActive ? `text-cyan-300` : ``}>About</NavLink>
                <NavLink to={'allproducts'} className={({isActive}) => isActive ? `text-cyan-300` : ``}>All Products</NavLink>
                <NavLink to={'/login'} className={`bg-blue-500 py-1 px-4 rounded-lg flex items-center gap-2`}>Login <ArrowRight size={20} /></NavLink>
            </div>
        </div>
    </div>
}