import React from 'react'
import { NavLink } from 'react-router-dom'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className='hero_container'>
        <div className="hero_left">
            <h5>welcome to</h5>
            <h2>Jangid store</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque assumenda, hic commodi ex quis saepe aut est soluta!
            olor sit amet consectetur adipisicing elit. Nam itaque assumenda, hic commodi ex quis saepe aut est soluta!
            </p>
            <button className='button'><NavLink to="/products">shop now</NavLink></button>
           
           
        </div>
        <div className="hero_right">
           <div className="image_overlap">
           <img src="https://c1.wallpaperflare.com/preview/673/616/1000/family-shopping-center-purchase-food.jpg" alt="" />
           </div>
        </div>
    </div>
  )
}

export default HeroSection