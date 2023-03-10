import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from "./components/Register"

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App />
        },
        {
            path:"/Register",
            element:<Register />
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode >
        <RouterProvider router={router} />
    </React.StrictMode>,
)