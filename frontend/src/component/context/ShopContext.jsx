//imported context
import {  createContext } from 'react';
import all_data from '../../assets/all_data.js';   //imported data


export const allContext=createContext();  //created context and stored



function ShopContext({children}) {
  
const data=all_data   //assigned data to a variable
  

return (
    <>
    {/* passed the data to value */}
    <allContext.Provider value={data}>  
    {/* should use small c for children */}
    {children}
     </allContext.Provider>
    </>
  )
}

export default ShopContext
