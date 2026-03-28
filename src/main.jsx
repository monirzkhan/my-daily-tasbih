import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './assets/Layout/Layout.jsx'
import Error from './assets/Components/ErrorPage.jsx/Error.jsx'
import Home from './assets/Components/Home/Home.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        path:'/',
        element:<Home/>
      }
    ]
  
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
