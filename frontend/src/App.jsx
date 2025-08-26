import { Outlet } from 'react-router-dom';
import './App.css'
import { Footer } from './component/footer/Footer';
import Header from './component/header/Header';

// import { Homepage } from './component/pages/homepage/Homepage'
// import ProductCategory from './component/pages/productCategory/ProductCategory.jsx';




function App() {  

  return (
    <>
    <Header></Header>
    
     <Outlet/>
    <Footer></Footer>
    
    </>
  )
}

export default App
