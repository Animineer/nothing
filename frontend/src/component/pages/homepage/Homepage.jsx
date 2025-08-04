import React from 'react'
import {Footer}  from '../../footer/Footer'
import  {Banner}  from '../../Banner/Banner'
import style from "./Homepage.module.css"
import Banner_1 from "../../../assets/posters/banner_1.jpg"
import Banner_2 from "../../../assets/posters/banner_2.jpg"
import Banner_3 from "../../../assets/posters/banner_3.jpg"
import Banner_4 from "../../../assets/posters/banner_4.jpg"
import Banner_5 from "../../../assets/posters/banner_5.jpg"
import Banner_6 from "../../../assets/posters/banner_6.jpg"
import Banner_7 from "../../../assets/posters/banner_7.jpg"
import Banner_8 from "../../../assets/posters/banner_8.jpg"
import Banner_9 from "../../../assets/posters/banner_9.jpg"
import Banner_10 from "../../../assets/posters/banner_10.jpg"
import Banner_11 from "../../../assets/posters/banner_11.jpg"

import phone_3 from "../../../assets/phones/nothing/Phone-3-white.png"

import phone_3a_pro from "../../../assets/phones/nothing/Phone-3a-Pro-black.png"
import phone_3a from "../../../assets/phones/nothing/Phone-3a-black.png"
import phone_2a_plus from "../../../assets/phones/nothing/Phone-2a-Plus-Black.png"
import phone_2a from "../../../assets/phones/nothing/Phone-2a-black.png"
import cmf_2pro from "../../../assets/phones/cmf/CMF-Phone-2-Pro-Orange.png"
import cmf_buds_2_plus from "../../../assets/earphones/buds/CMF-Buds-2a-case-black.png"
import Headphone_1 from "../../../assets/earphones/headphones/Headphone1-white.png"
import ear_open from "../../../assets/earphones/ear-open/Ear-open-white.png"
import ear from "../../../assets/earphones/ear/Ear-white.png"
import ear_a from "../../../assets/earphones/ear/Ear-a-yellow.png"
import Header from '../../header/Header'



export const Homepage = () => {
  return (
    <div className={style.homepage_main}>
     <Header></Header>
      
      {/* <img src={banner_1} alt="" /> */}
      {/* <Banner words="Come to Play" phone="phone (3)" image="../../assets/posters/banner_1.jpg"></Banner> */}
      
      <Banner words="Come to Play " phone="phone (3)"  image2={phone_3} image={Banner_1}/>
      <Banner words=" come to play" phone="headphone (1) "  image2={Headphone_1} image={Banner_2}></Banner>
      <Banner words="Predictably unexpected " phone="phone (3a) pro " image2={phone_3a_pro} image={Banner_3}></Banner>
      <Banner words="Power in perspective " phone="phone (3a) " image2={phone_3a} image={Banner_4}></Banner>
      <Banner words="Wonderful by design " phone="cmf phone 2 pro " image2={cmf_2pro} image={Banner_5}></Banner>
      <Banner words="Double down on sound " phone="cmf buds 2 plus " image2={cmf_buds_2_plus} image={Banner_6}></Banner>
      <Banner words="Open your world " phone="ear (open) " image2={ear_open} image={Banner_7}></Banner>
      <Banner words="Sound, evolved " phone="ear " image2={ear} image={Banner_8}></Banner>
      <Banner words="Let's play " phone=" ear (a)" image2={ear_a} image={Banner_9}></Banner>
      <Banner words="Extraordinary " phone=" phone (2a) plus" image2={phone_2a_plus} image={Banner_10}></Banner>
      <Banner words="Powerfully unique " phone="phone (2a) " image2={phone_2a} image={Banner_11}></Banner> 
      <Footer></Footer>
    </div>
  )
}
