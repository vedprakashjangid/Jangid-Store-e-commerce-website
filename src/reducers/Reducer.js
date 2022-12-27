import Products from "../Components/Products"

const Reducer = (state, action) => {
 

    switch (action.type) {
        case "SET_API_DATA":
            let featureData = action.payload.filter((curEle)=>{

                return curEle.featured===true
            })
            return {
                
                ...state,
                isLoading:false,
                Products: action.payload,
               
                featureProducts:featureData
            }
            case "SET_SINGLE_PRODUCT":
                return {
                    ...state,
                    isLoading: false,
                    singleProduct:action.payload
                }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: false
            }
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
    }
    return state

}

export default Reducer