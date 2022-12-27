import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCartReducer } from '../context/CartContext';
import "./SingleProduct.css"
import ToggleAmount from './ToggleAmount';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const{addCartItem}=useCartReducer()
    const [ color, setColor ] = useState(colors[0]);
    const[amount,setAmount]=useState(1);
    const setIncrease = ()=>{

        amount < stock ? setAmount(amount+1):setAmount(stock) 
    }
    const setDecrease = ()=>{
        amount > 1 ? setAmount(amount-1) :setAmount(1)
    }
    return (
        <>
            <div className="color_div">
                colors:{
                    colors.map((curColor,i) => {
                        return (
                            <button 
                            key={i}
                            className={color===curColor?"color_button tick_mark":"color_button"}
                             style={{ backgroundColor: curColor }}
                             onClick={()=>setColor(curColor)}
                           
                            >
                             {color===curColor? <i class="fa-solid fa-check tick_icon"></i>:null}

                            </button>
                        )
                    })
                }
            </div>
            <ToggleAmount 
            amount={amount}
            setIncrease={setIncrease}
            setDecrease={setDecrease}
            />
            <NavLink to="/cart">
        <button className='add_to_cart_btn'
        onClick={()=>addCartItem(id,color,amount,product)}
        >Add To Cart</button></NavLink>
        </>
    )
}

export default AddToCart