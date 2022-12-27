import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducers/Reducer"



const AppContext = createContext();
const initialState = {
    isLoading: false,
    isError: false,
    Products: [],
    featureProducts: [],
    singleProduct: {}

}

const ProductContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const API = "https://api.pujakaitem.com/api/products"
    const getApiData = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const Products = await res.data;
            // console.log(Products);

            dispatch({ type: "SET_API_DATA", payload: Products })

        }
        catch (error) {
            dispatch({ type: "SET_ERROR" })

        }


    }

    useEffect(() => {
        getApiData(API);
    }, [])

    //get single product
    const getSingleProduct = async (api) => {
        try {
            const res = await axios.get(api);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })

        } catch (error) {


        }
    }

    return <AppContext.Provider value={{ ...state ,getSingleProduct}}>
        {children}
    </AppContext.Provider>

}

//custom hook
const useMyCustomHook = () => {
    return useContext(AppContext)
}
export { AppContext, ProductContext, useMyCustomHook}