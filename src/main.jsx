import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRouter from './Protected/ProtectedRouter.jsx'
import Login from './auth/Login.jsx'
import AllProducts from './components/AllProducts.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'

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
        path: 'allproducts',
        element: <AllProducts />
      },
      {
        path: '/profile',
        element: <Profile />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
