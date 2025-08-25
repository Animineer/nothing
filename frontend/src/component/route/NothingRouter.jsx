import { Children } from "react";
import App from "../../App";
import { Homepage } from "../pages/homepage/Homepage";
import ProductCategory from "../pages/productCategory/ProductCategory";

export const NothingRouter=createBrowserRouter([{
    
        path:"/",
        Element:<App></App>,  
        children:[{
            path:"/Home",
            Element:<Homepage></Homepage>,
        },
        {
            path:"/Category",
            Element:<ProductCategory></ProductCategory>,

        }]


}])