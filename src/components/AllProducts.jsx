import { useEffect } from "react";
import { deleteProduct, fetchAllProducts } from "../redux/backendSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import { Edit, ShoppingCart, Trash } from "lucide-react";

export default function AllProducts(){
    const dispatch = useDispatch()
    const {users, isLoading, error} = useSelector(state => state.backend)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    if(isLoading){
        return <div className="w-full h-[calc(100vh-70px)] flex justify-center pt-30">
            <Loading />
        </div>
    }

    if(error){
        return <div>
            <p className="text-center text-3xl text-red-600 mt-7 font-semibold">Xatolik</p>
        </div>
    }

    return <div className="max-w-[1030px] px-[15px] mx-auto h-[calc(100vh-70px)] overflow-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5">
        {users.map(item => {
            return <div key={item.id} className="h-[310px] relative border border-gray-400 rounded flex flex-col shadow-lg cursor-context-menu transition-all duration-150 hover:duration-75 hover:scale-103">
                <div className="w-full h-[170px]">
                    <img src={item.images[0]} alt="" className="h-full w-full object-contain" />
                </div>
                <div className="pt-1 pb-4 w-full px-3 flex flex-col gap-2">
                    <p className="text-[14px] font-medium text-center leading-[15px]">{item.title}</p>
                    <p className="text-gray-600 leading-[13px] text-[13px]">{item.description.slice(0, 55)}</p>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">${item.price}</p>
                        <p>Rate: {item.rating}/5</p>
                    </div>
                    <button className="bg-blue-600 text-white flex items-center justify-center gap-2 cursor-pointer py-1 rounded transition-all duration-150 active:duration-70 active:scale-95"><ShoppingCart size={20} /> Add to Cart</button>
                </div>

                <div className="flex-1 absolute top-2 right-2 flex flex-col gap-2">
                    <Edit size={20} color="blue" />
                    <Trash onClick={() => dispatch(deleteProduct(item.id))} size={20} color="red" className="cursor-pointer" />
                </div>
            </div>
        })}
    </div>
}