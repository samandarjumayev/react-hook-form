import { ArrowRightSquare, User } from "lucide-react";

export default function Login(){
    return <div className="w-full h-[100vh] flex items-center justify-center bg-zinc-700">
        <form action="" className="bg-white shadow-lg rounded-lg py-9 px-7 w-[450px] flex flex-col gap-3">
            <h1 className="text-center flex text-3xl font-semibold justify-center items-center gap-2 mb-5">Login</h1>
            <div>
                <input type="text" placeholder="Your Name" className="border border-gray-500 w-full rounded py-2 px-4 outline-none" />
            </div>
            <div>
                <input type="email" placeholder="Email" className="border border-gray-500 w-full rounded py-2 px-4 outline-none" />
            </div>
            <div>
                <input type="password" placeholder="Password" className="border border-gray-500 w-full rounded py-2 px-4 outline-none" />
            </div>
            <div>
                <input type="password" placeholder="Confirm Password" className="border border-gray-500 w-full rounded py-2 px-4 outline-none" />
            </div>

            <button type="button" className="bg-blue-600 text-white py-2 rounded my-2 cursor-pointer transition-all duration-200 active:duration-75 active:scale-95 text-[20px] font-medium">Login</button>
        </form>
    </div>
}