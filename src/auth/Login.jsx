import { useFormik } from "formik"
import { loginSchema } from "./formSchema"

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: ''
}

export default function Login(){
    const {values, handleSubmit, handleChange, handleBlur, errors, touched} = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (value) => {
            console.log(value);
            localStorage.setItem('data', JSON.stringify(value))
            localStorage.setItem('token', true)
        }
    })

    // console.log(values)

    return <div className="w-full h-screen bg-zinc-700 flex items-center justify-center">
        <form action="" onSubmit={handleSubmit} className="bg-white rounded w-[450px] py-5 px-5 flex flex-col gap-2">
            <h1 className="font-[monospace] text-3xl font-semibold mb-3">Login</h1>
            <div>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    className="w-full border border-gray-500 outline-none rounded py-2 px-3 focus:ring-1"
                />
                <p className="text-[14px] text-red-500">{touched.name && errors.name}</p>
            </div>
            <div>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    className="w-full border border-gray-500 outline-none rounded py-2 px-3 focus:ring-1"
                />
                <p className="text-[14px] text-red-500">{touched.email && errors.email}</p>
            </div>
            <div>
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    className="w-full border border-gray-500 outline-none rounded py-2 px-3 focus:ring-1"
                />
                <p className="text-[14px] text-red-500">{touched.password && errors.password}</p>
            </div>
            <div>
                <input 
                    type="password" 
                    name="confirm_password"
                    placeholder="Confirm Password" 
                    onChange={handleChange}
                    value={values.confirm_password}
                    onBlur={handleBlur}
                    className="w-full border border-gray-500 outline-none rounded py-2 px-3 focus:ring-1"
                />
                <p className="text-[14px] text-red-500">{touched.confirm_password && errors.confirm_password}</p>
            </div>
            <button type="submit" className="bg-green-600 w-full py-2 text-xl font-medium my-3 rounded text-white cursor-pointer transition-all duration-150 active:duration-60 active:scale-95">Login</button>
        </form>
    </div>
}
