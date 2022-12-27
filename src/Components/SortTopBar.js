import React,{useState}from 'react'
import { useFilterContext } from '../context/filterContext'
import "./Products.css"

const SortTopBar = () => {
  const {gridView,ToggleGridView,ToggleListView, filter_products,getSelectBoxValue} =useFilterContext();
 
    return (
        <>
        <div className="grid_list_div">
            <i class={gridView ? "fa-solid fa-table-cells-large gridListIconActive" :"fa-solid fa-table-cells-large "}
            onClick={()=>ToggleListView()}
            ></i>
            <br />
            <i class={!gridView ? "fa-solid fa-list gridListIconActive":
          "fa-solid fa-list"  
          }
            
            onClick={()=>ToggleGridView()}
            ></i>
        </div>
         <div className="">{` ${filter_products.length}`} Products available</div>
         <div className="select_box">
           <select name="select" id="select"
           onClick={getSelectBoxValue}
           >
             <option value="lowest">Price(lowest)</option>
             <option value="highest">Price(highest)</option>
             <option value="a-z">A-Z</option>
             <option value="z-a">Z-A</option>
           </select>
         </div>
         </>
    )
}

export default SortTopBar