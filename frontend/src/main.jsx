import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContext from './component/context/ShopContext.jsx'
import { NothingRouter } from './component/route/NothingRouter.jsx'
import { RouterProvider } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
   <StrictMode>
    <ShopContext>
      <RouterProvider router={NothingRouter}/>
       
    </ShopContext>
  </StrictMode>,
)
