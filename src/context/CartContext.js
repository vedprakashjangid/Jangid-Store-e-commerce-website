import { createContext, useReducer, useContext, useEffect } from "react"
import reducer from "../reducers/CartReducer"
const CartContext = createContext();

const cartItemFromLocalStorage =()=>{
    let locatCartData = localStorage.getItem("jangidCart");
    if(locatCartData===[]){
        return []
    }
    else{

        return JSON.parse(locatCartData)
    }
}

const initialState = {
    // cart: [],
    cart:cartItemFromLocalStorage(),
    total_item:"",
    total_amount:"",
    shipping_charge:50,
    cart_total:"",
    net_subTotal:0
    
}


const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addCartItem = (id, color, amount, product) => {
        
        dispatch({ type:"ADD_TO_CART", payload: { id, color, amount, product } })
    }
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }
    const deleteItem =(id)=>{
        dispatch({type:"DELETE_ITEM",payload:id})
    }
    const setIncrease =(id)=>{
        dispatch({type:"SET_INCREASE_ITEM",payload:id})
    }
    const setDecrease =(id)=>{
        dispatch({type:"SET_DECREASE_ITEM",payload:id})
    }

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"GET_NET_SUBTOTAL"});
        localStorage.setItem("jangidCart",JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{ ...state, addCartItem,clearCart,deleteItem,setIncrease,setDecrease}}>
        {children}
    </CartContext.Provider>
}
const useCartReducer = () => {
    return useContext(CartContext)
}

export { CartContext, CartContextProvider, useCartReducer }
