import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'
export const Footer_1 = () => {
  return (
    <div className={style.f1_main}>
        {/* <h3><Link to="/SHOP ALL">SHOP ALL</Link></h3> */}
        <h3><Link to="/PHONES">PHONES</Link></h3>
        <h3><Link to="/AUDIO">AUDIO</Link></h3>
        <h3><Link to="/WATCHES">WATCHES</Link></h3>
        <h3><Link to="/ACCESSORIES">ACCESSORIES</Link></h3>
        <h3><Link to="/CMF">CMF</Link></h3>
    </div>
  )
}
