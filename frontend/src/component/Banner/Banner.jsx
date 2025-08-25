import React from 'react'
import style from "./Banner.module.css"
import phone_2a from '../../assets/phones/nothing/phone-2a-milk.png'
// import banner_1 from "../../assets/posters/banner_2.jpg"
export const Banner = (props) => {
  // console.log(props)
  return (
    <>
    <div className={style.post}><img  src={props.image} alt="" />
   <div className={style.banner_main}>
    <div className={style.banner_left}>
        <h3>{props.words}</h3>
        <h5>{props.phone}</h5>
    </div>
    <div className={style.banner_right}>
        <img src={props.image2} alt="" />
        <p>shop</p>
    </div>
   </div>
   </div>
   </>
  )
}
