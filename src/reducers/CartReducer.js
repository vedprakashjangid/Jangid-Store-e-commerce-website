import Color from "../Components/Color";

const CartReducer = (state, action) => {

   switch (action.type) {
      case "ADD_TO_CART":
         const { id, color, amount, product } = action.payload;
       let existedItem= state.cart.find((curEle)=>{
         return curEle.id===id+color
       })
       if(existedItem){
         let updatedProduct =state.cart.map((curEle)=>{
            if(curEle.id==id+color){
               let newAmount= curEle.amount+amount
               if(newAmount>=6){
                  newAmount=6
               }
               return {
                  ...curEle,
                  amount:newAmount
               }
            }
            else{
            return curEle
            }
         })
         return{
            ...state,
            cart:updatedProduct
         }
        
       }
       else{
         let item;
         item = {
            id: id + color,
            color: color,
            amount: amount,
            name: product.name,
            price: product.price,
            image:product.image[0].url
         }
         return {
            ...state,
            cart: [...state.cart, item]
         }}

         case "CLEAR_CART":
            return{

               ...state,
               cart:[]
            }

            case "DELETE_ITEM":
               let detletedItem = state.cart.filter((curEle)=>{
                  return curEle.id != action.payload
               })
               return{
                  ...state,
                  cart:detletedItem

               }
   case "SET_DECREASE_ITEM":
      let decreaseItem = state.cart.map((curEle)=>{
        
         if(curEle.id===action.payload){
          
            let deAmount=curEle.amount-1;
            if(deAmount<=1){
               deAmount=1
            }
             return{...curEle,amount:deAmount}  
         }else{ return curEle}
        
      })
      return{
       ...state,
       cart:decreaseItem
      }

      case "SET_INCREASE_ITEM":
         let IncreaseItem = state.cart.map((curEle)=>{
                 
            if(curEle.id===action.payload){
               
               let IncAmount=curEle.amount+1;
               if(IncAmount>=6){
                  IncAmount=6
               }
                return{...curEle,amount:IncAmount}  
            }else{ return curEle}
           
         })
         return{
          ...state,
          cart:IncreaseItem
         }

      case "CART_TOTAL_ITEM":
         let cartTotal = state.cart.reduce((initialVal,curEle)=>{
              let{amount}=curEle;
              initialVal = initialVal+amount;
              return initialVal
         },0)
         return{
            ...state,
            cart_total:cartTotal
         }
         case "GET_NET_SUBTOTAL":
            let total = state.cart.reduce((initialVal,curEle)=>{
               let{amount,price}=curEle;
               initialVal = initialVal+(price*amount)
               return initialVal
            },0)
            return{
               ...state,
               net_subTotal:total
            }
   }

   return state
}
export default CartReducer