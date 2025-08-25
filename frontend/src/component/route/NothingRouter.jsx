// import { Children } from "react";
import App from "../../App";
import { Homepage } from "../pages/homepage/Homepage";
import ProductCategory from "../pages/productCategory/ProductCategory";
import {createBrowserRouter} from "react-router-dom"
export const NothingRouter=createBrowserRouter([{
    
        path:"/",
        element:<App/>,  
        children:[{
            path:"Home",
            element:<Homepage/>,
        },
        {
            path:"category/:category",
            element:<ProductCategory/>,

        }]


}])