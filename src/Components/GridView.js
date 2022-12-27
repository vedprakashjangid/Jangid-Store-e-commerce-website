import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Products.css"
const GridView = ({products}) => {
  
    console.log(products)
  return (
    <>
    <div className="show_products_grid">
    {
        products.map((curEle)=>{
            const {id,name,image,price,category} =curEle;
            return(
        <NavLink to={`/singleproduct/${id}`} className="product_navlink">
              <div className="single_product_div" key={id}>
            <div className="pro_image">
                <img src={image} alt="" />
                <div className="figcaption">{category}</div>

            </div>
            <div className="name_price">
                <p className='pro_name'>{name}</p>
                <p className='pro_price'>₹{price/100}</p>
            </div>
          </div>
        </NavLink>
             
            )
        })
    }
    </div>
    </>
  )
}

export default GridView