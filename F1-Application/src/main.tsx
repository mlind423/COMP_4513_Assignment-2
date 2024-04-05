import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
}from "react-router-dom"
import './index.css'
import Root from './routes/root'
import Login from './routes/login'

const router = createBrowserRouter([
  {
    path: "/main",
    element: <Root/>,
  },
  {
    path: "/",
    element: <Login/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
