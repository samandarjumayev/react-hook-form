import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRouter from './Protected/ProtectedRouter.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import AllProducts from './components/AllProducts.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRouter>
        <App />
      </ProtectedRouter>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: 'allproducts',
        element: <AllProducts />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
