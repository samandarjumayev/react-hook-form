import { Edit } from "lucide-react"
import { useRef } from "react"


export default function Profile(){
    const int = useRef()
    let user = JSON.parse(localStorage.getItem('data'))
    
    return <div className="w-full h-[calc(100vh-70px)] flex items-center justify-center">
        <div className="border border-zinc-400 rounded shadow-2xl w-[420px] h-auto py-7 px-5 flex flex-col gap-3">
            <div className="flex items-center justify-center w-full">
                <img src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'} alt="" className="h-[90px]" />
            </div>
            
            <div className="flex flex-col border rounded py-1 px-3 border-gray-400">
                <p className="text-[14px] text-gray-500">Name:</p>
                <input ref={int} type="text" value={user.name} readOnly className="outline-none"/>
            </div>
            <div className="flex flex-col border rounded py-1 px-3 border-gray-400">
                <p className="text-[14px] text-gray-500">Email:</p>
                <p>{user.email}</p>
            </div>
            <div className="flex flex-col border rounded py-1 px-3 border-gray-400">
                <p className="text-[14px] text-gray-500">Password:</p>
                <p>{'*'.repeat(user.password.length)}</p>
            </div>

            <button className="py-2 flex items-center justify-center gap-2 bg-green-500 rounded-lg text-white font-semibold text-[20px] mt-2 cursor-pointer transition-all duration-150 active:duration-70 active:scale-95"><Edit size={20} /> Edit</button>
        </div>
    </div>
}