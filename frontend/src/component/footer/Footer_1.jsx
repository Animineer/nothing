import React from 'react'
import style from "./Footer.module.css"
import { Link, Outlet } from 'react-router-dom'
export const Footer_1 = () => {
  return (
    <div className={style.f1_main}>
        {/* <h3><Link to="/SHOP ALL">SHOP ALL</Link></h3> */}
        <h3><Link className={style.f1_link} to="/category/smartphone">PHONES</Link></h3>
        <h3><Link className={style.f1_link} to="/category/audio">AUDIO</Link></h3>
        <h3><Link className={style.f1_link} to="/category/watch">WATCHES</Link></h3>
        <h3><Link className={style.f1_link} to="/category/accessories">ACCESSORIES</Link></h3>
        {/* <h3><Link to="/CMF">CMF</Link></h3> */}
        
    </div>
  )
}
