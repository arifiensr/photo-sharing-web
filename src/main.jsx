import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
