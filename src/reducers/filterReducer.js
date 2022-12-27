import { isClickableInput } from "@testing-library/user-event/dist/utils"

const filterReducer = (state, action) => {

    switch (action.type) {
        case "SET_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curEle)=>curEle.price)
            let maxPrice = Math.max(...priceArr)
            return {
                ...state,
                gridView: true,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{
                    ...state.filters,
                    maxPrice:maxPrice,price:maxPrice
                }
            }
        case "TOGGLE_GRID_VIEW":
            return {
                ...state,
                gridView: false
            }
        case "TOGGLE_LIST_VIEW":
            return {
                ...state,
                gridView: true
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sortingValue: action.payload
            }
        case "SORTING_PRODUCTS_BY_SELECTBOX":
            let newSortData;
            const {filter_products,sortingValue} =state;
            let tempFilterProduct = [...filter_products]

            const sortingProducts =(a,b)=>{
                if(sortingValue==="a-z"){
                    return a.name.localeCompare(b.name)
                }
                if(sortingValue==="z-a"){
                    return b.name.localeCompare(a.name)
                }
                if(sortingValue==="lowest"){
                    return a.price-b.price
                }
                if(sortingValue==="highest"){
                    return b.price-a.price
                }
            }

              newSortData = tempFilterProduct.sort(sortingProducts)
            return{
                ...state,
                filter_products:newSortData
            }
            case "UPDATE_FILTER_VALUE":
                const {name,value} =action.payload;
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]:value
                    }
                }
                case "SORTING_BY_SEARCH_BOX":
                    const{all_products} = state;
                    let tempSortProduct =[...all_products];
                    const {text,category,company,color,price}=state.filters;
                    if(text){
                        tempSortProduct = tempSortProduct.filter((curEle)=>{
                            return(
                                curEle.name.toLowerCase().includes(text)
                            )
                        })
                    }
                    if(category!=="all"){
                        tempSortProduct = tempSortProduct.filter((curEle)=>{
                            return(
                                curEle.category===category
                            )
                        })
                    }
                    if(company!=="all"){
                        tempSortProduct = tempSortProduct.filter((curEle)=>{
                            return(
                                curEle.company===company
                            )
                        })
                    }
                    if(color!=="all"){
                        tempSortProduct = tempSortProduct.filter((curEle)=>{
                            return(
                                curEle.colors.includes(color)
                            )
                        })
                    }
                    if(price===0){
                        tempSortProduct = tempSortProduct.filter((curEle)=>{
                            return(
                                curEle.price==price
                            )
                        })
                    }
                    else{
                        tempSortProduct = tempSortProduct.filter((curEle)=>{
                            return(
                                curEle.price<=price
                            )
                        })
                    }
                  
                 return{
                    ...state,
                    filter_products:tempSortProduct
                 }
                 case "CLEAR_FILTER":
                    return{
                        ...state,
                        filters:{
                            ...state.filters,
                            text:"",
                            category:"all",
                            comapany:"all",
                            color:"all",
                            maxPrice:0,
                            price:state.filters.maxPrice,
                            minPrice:state.filters.maxPrice
                        }
                    }
    }


    return state
}

export default filterReducer