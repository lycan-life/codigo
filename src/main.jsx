import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login' 
import WorkPlace from './pages/WorkPlace'
import Registrate from './pages/Registrate'
import Panel from './pages/Panel'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/WorkPlace',
    element:<WorkPlace/>,
    children:[
      {
        index:true,
        element: <Panel/>
      },
      {
        path: '/WorkPlace/Registro/Empleados',
        element: <Registrate/>
      }
    ]
  },
  {
    path: '/Registrate',
    element: <Registrate/>
  },
  
  // {
  //   path: '/otro',
  //   element: <WorkPlace2/>,
  //   children:[{
  //     index:true,
  //     element: <Panel/>
  //   }]
  // },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
