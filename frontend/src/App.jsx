import './App.css'

import { Homepage } from './component/pages/homepage/Homepage'
import ProductCategory from './component/pages/productCategory/ProductCategory.jsx';
import {BrowserRouter, Router, Route} from "react-router-dom"




function App() {  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/offers' element={<ProductCategory category="shop"/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
    <ProductCategory></ProductCategory>
    <Homepage></Homepage>
    </>
  )
}

export default App
