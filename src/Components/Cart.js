import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Cart.css"
import { useCartReducer } from "../context/CartContext"
import CartItem from './CartItem'

const Cart = () => {
  const { cart, total_item,clearCart,deleteItem,setDecrease,setIncrease,net_subTotal,shipping_charge} = useCartReducer();
  

 
 if(cart.length===0){
  return (<div className='empty_cart'><h1>No item in the Cart</h1></div>)
 }

  return (
    <>

      <div className="cart_heading">
        <p className="cart_heading_css item_heading">Item</p>
        <p className="cart_heading_css item_price">Price</p>
        <p className="cart_heading_css item_qt">Quantity</p>
        <p className="cart_heading_css">subtotal</p>
        <p className="cart_heading_css">remove</p>
      </div>

      <div className="cart_items_outer_div">

        {
          cart.map((curEle, i) => {
            const { id, name, price, image, color, amount }=curEle;
            return (
<div className="cart_items">
      <div className="cart_image_name_div">
               <img src={image} alt={id} className="cart_small_image" />
              <div className="name_image_div">
                   <p>{name}</p>
                   <div className="small_color_div">
                     <p>Color:</p>
                     <button className='color_button'
                     style={{ backgroundColor: color }}
                     >
                     </button>
                   </div>
              </div>
        </div>


        <div className="cart_price_div">
          <p>₹{price/100}</p>
        </div>

        <div className="cart_quantity_div">
          <div className='plus_minus_btn'>
            <button onClick={()=>setDecrease(id)} className="minus_btn"><i class="fa-solid fa-minus" ></i></button>
            <div className="amount"> {amount}</div>
            <button onClick={()=>setIncrease(id)} className="plus_btn"><i class="fa-solid fa-plus" ></i></button>
          </div>

        </div>

        <div className="cart_subtotal">
        ₹{(price*amount)/100}
        </div>

        <div className="cart_item_remove">
        <i className="fa-solid fa-trash delete_icon" onClick={()=>deleteItem(id)} ></i>
        </div>
      </div>

    

      
            )
          })
        }

      </div>




      <div className="continue_shopping">
        <NavLink to="/products"><button className='contiue_clear_btn conti'>continue shopping</button></NavLink>
        <button className='contiue_clear_btn clear'
        onClick={clearCart}
        >clear cart</button>
      </div>

      <div className="total_order_div">
        <div className="total_order">
          <div className="subtotal_div">
            <p>Subtotal:</p>
            <p className='charge'>₹{net_subTotal/100}</p>
          </div>
          <div className="shipping_div">
            <p>Shipping Fee:</p>
            <p className='charge'>₹{shipping_charge}</p>
          </div>
          <hr />
          <div className="grand_total_div">
            <p>Order Total:</p>
            <p className='charge'>₹{(net_subTotal+shipping_charge)/100}</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Cart