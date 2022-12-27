import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMyCustomHook } from '../context/ProductContext';
import PageNavigation from './PageNavigation';
import "./SingleProduct.css"
import Stars from './Stars';
import Image from './Image';
import Color from './Color';
import AddToCart from './AddToCart';

const SingleProduct = () => {
  const api = "https://api.pujakaitem.com/api/products"
  const { getSingleProduct, singleProduct } = useMyCustomHook();
  const { id } = useParams();
  const { name, id: ID, category, stars, colors, company, reviews, image, stock, price,
    description
  } = singleProduct;
  console.log(name)
  useEffect(() => {
    getSingleProduct(`${api}?id=${id}`)
  }, [])
  return (
    <>
      <PageNavigation title={name} />
      <section className='single_product_container'>

        <Image imgs={image} />
        <div className="product_detail_container">
          <h2 className='nam'>{name}</h2>
          <Stars stars={stars} />
          <p>{category}</p>
          <p >MRP: <span className='mrp'>₹{price / 100 + 1500}</span></p>
          <p className='deal_of_day'>Deal of the day: ₹{price / 100 - 1000}</p>
          <p>{description}</p>
          <div className="four_icon">
            <div className="ico">
              <i class="fa-solid fa-truck-fast"></i>
              <p>fast delivery</p>
            </div>
            <div className="ico">
              <i class="fa-solid fa-repeat"></i>
              <p>30 days repleshment</p>
            </div>
            <div className="ico">
              <i class="fa-solid fa-truck-front"></i>
              <p>jangid deliverd</p>
            </div>
            <div className="ico">
              <i class="fa-solid fa-shield-halved"></i>
              <p>2 years warranty</p>
            </div>
          </div>
          <p>Available:<span className='stock'>{stock > 0 ? "in stock" : "not avilable"}</span></p>
          <p>ID:{ID}</p>
          <p>Brand:{company}</p>
          <hr className='hr' />
          <div className="colors">

            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>

      </section>

    </>
  )
}

export default SingleProduct