import * as Yup from 'yup'

export const loginSchema = Yup.object({
    name: Yup.string().matches(/[a-zA-Z]/).min(3).required('Ismingizni kiriting'),
    email: Yup.string().email().required('Emailni kiriting'),
    password: Yup.string().min(6).matches(/[a-zA-Z0-9]/).required('Passwordni kiriting'),
    confirm_password: Yup.string().oneOf([Yup.ref('password')], 'Password bir xil emas').required('Passwordni tasdiqlang')
})