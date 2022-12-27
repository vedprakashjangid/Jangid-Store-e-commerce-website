import React from 'react'
import { NavLink } from 'react-router-dom';
import { useMyCustomHook } from '../context/ProductContext'
import "./FeatureProducts.css"



const FeatureProducts = () => {
    const { featureProducts, isLoading } = useMyCustomHook();
    console.log(featureProducts)

    
    return (
        <>
         <div className="our_feature_products">
                    <h2>Our feature products</h2>
                </div>
            <div className="feature_container">
               

                {
                    featureProducts.map((curEle) => {

                        const { name, image, category, price, id } = curEle;

                        return (
                            <NavLink to={`/singleproduct/${id}`} className="single">
                                <div className="inner_container" key={id}>
                                    <div className="first">
                                        <figure>
                                            <img src={image} alt={name} />
                                            <figcaption>{category}</figcaption>
                                        </figure>
                                        <div className="product_details">
                                            <div className="">{name}</div>
                                            <div className="">₹{price / 100}</div>
                                        </div>
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

export default FeatureProducts