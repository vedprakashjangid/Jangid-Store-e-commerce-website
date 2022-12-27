import React, { useContext } from 'react'
import { useFilterContext } from '../context/filterContext'
import { useMyCustomHook } from '../context/ProductContext'
import GridView from './GridView'
import ListView from './ListView'
import "./Products.css"
import SortTopBar from './SortTopBar'
import FilterBarLeftSide from "./FilterBarLeftSide"


const Products = () => {

  const {filter_products,gridView} =useFilterContext();

  // if(gridView===true){
  //   return <GridView products={filter_products}/>

  // }
  // if(gridView===false){
  //   return <ListView products={filter_products}/>

  // }

  return (<>

    <div className="products_container">
      <div className="products_filters_left">
        <FilterBarLeftSide/>
      </div>
      <div className="products_filters_right">
        <div className="filter_view">
          <SortTopBar/>
         
        </div>
        <div className="show_products">
        
          {gridView? <GridView products={filter_products}/> : <ListView products={filter_products}/>}
          {/* <GridView products={filter_products}/>
          <ListView products={filter_products}/> */}
          {/* <div className="single_product_div_grid">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div>
          <div className="single_product_div">gffhf</div> */}
          
          {/* <div className="single_product_div_listview">gffhf</div>
          <div className="single_product_div_listview">gffhf</div>
          <div className="single_product_div_listview">gffhf</div> */}

        </div>

      </div>


    </div>

  </>
  )
}

export default Products