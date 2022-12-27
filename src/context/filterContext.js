import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

import { useMyCustomHook } from "./ProductContext";
import reducer from "../reducers/filterReducer"
const FilterContext = createContext();
  
  const initialState={
    filter_products:[],
    all_products:[],
    gridView:true,
    sortingValue:"lowest",
    filters:{
        text:"",
        category:"all",
        comapany:"all",
        color:"all",
        maxPrice:0,
        price:0,
        minPrice:0
    }
  }

 const FilterContextProvider = ({ children })=>{
     const {Products}=useMyCustomHook();
     console.log(Products)
    const [state,dispatch]= useReducer(reducer,initialState);
 
    useEffect(()=>{
        dispatch({type:"SET_FILTER_PRODUCTS",payload:Products})
    },[Products]);

    const ToggleGridView =()=>{
        dispatch({type:"TOGGLE_GRID_VIEW"});
    }
    const ToggleListView =()=>{
        dispatch({type:"TOGGLE_LIST_VIEW"});
    }

    const clearFilter =()=>{
        dispatch({type:"CLEAR_FILTER"});
    }
    //select box gettig value
const getSelectBoxValue =(e)=>{
   const userVal = e.target.value;
   console.log("uservalue "+userVal)
   dispatch({type:"GET_SORT_VALUE",payload:userVal})
}

const updateFilterValue =(e)=>{
    let name =e.target.name;
    let value =e.target.value;
     return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})

}

    useEffect(()=>{
        dispatch({type:"SORTING_BY_SEARCH_BOX"})
        dispatch({type:"SORTING_PRODUCTS_BY_SELECTBOX"})
    },[state.sortingValue,state.filters])

    return <FilterContext.Provider value={{...state,ToggleGridView,
    ToggleListView,getSelectBoxValue,updateFilterValue,clearFilter}}>
        {children}
    </FilterContext.Provider>
}
//custom hook
const useFilterContext=()=>{
    return useContext(FilterContext)
}

export {FilterContextProvider,useFilterContext}


