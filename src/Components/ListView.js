import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Products.css"

const ListView = ({ products }) => {
  return (
    <>
      <div className="show_products_list">

        {
          products.map((curEle) => {
          const {id,name,image,description}=curEle
            return (<div className="single_product_div_listview">
              <div className="list_image_div">
                <img src={image} alt="" />
              </div>
              <div className="list_pro_detail">
                <h3>{name}</h3>
                <p className='list_pro_para'>{description.slice(0,99)}...</p>
                <NavLink to={`/singleproduct/${id}`}  className="list_navlink"><button className='list_pro_btn'>Read more</button></NavLink>
              </div>
            </div>

            )
          })
        }
      </div>
    </>
  )
}

export default ListView