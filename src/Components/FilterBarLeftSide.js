import React, { useState } from 'react'
import { useFilterContext } from '../context/filterContext'
import "./Products.css"

const FilterBarLeftSide = () => {

    const { filters: { text, category, company, color,price,maxPrice,minPrice }, updateFilterValue, all_products,clearFilter } = useFilterContext();
    const getUniqeData = (data, property) => {
        let newVal = data.map((curEle) => {
            return curEle[property];
        })
        if (property === "colors") {
            newVal = newVal.flat()

        }
        return (["all", ...new Set(newVal)])
    }
    const categoryOnlyData = getUniqeData(all_products, "category");
    const companyOnlyData = getUniqeData(all_products, "company");
    const colorsData = getUniqeData(all_products, "colors");


    return (
        <>
            <div className="search_div">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={updateFilterValue}
                        placeholder='search...'
                        className='seacrhBar' />
                </form>
            </div>
            <div className="category_search_div">
                <h3>Category</h3>
                <br />

                {
                    categoryOnlyData.map((curEle) => {
                        return <button
                            type="button"
                            name="category"
                            value={curEle}
                            key={curEle}
                            className="category_as_btn"
                            onClick={updateFilterValue}
                        >{curEle.toUpperCase()}</button>

                    })
                }

            </div>
            <div className="company_search_div">
                <h3 className='compant_title'>Company</h3>
                <form action="">

                    <select name="company" id="company" onClick={updateFilterValue} >
                        {
                            companyOnlyData.map((curEle, i) => {
                                return (
                                    <option value={curEle} name="company"
                                        key={i}
                                    >{curEle}</option>
                                )
                            })
                        }
                    </select>
                </form>
            </div>
            <div className="colors_search_div">
                <h3>Colors</h3>
                <div className="colors_search_inside_div">
                {
                    colorsData.map((curEle, i) => {
                        if(curEle==="all"){
                          return(  <button
                            type="button"
                            key={i}
                            name="color"
                            value={curEle}
                            className="color_btn_styling_all"
                          
                            onClick={updateFilterValue}

                        >
                          All
                        </button> ) 
                        }
                        return (
                            <button
                                type="button"
                                key={i}
                                name="color"
                                value={curEle}
                                className="color_btn_styling"
                                style={{ backgroundColor: curEle }}
                                onClick={updateFilterValue}

                            >
                                {color === curEle ? <i class="fa-solid fa-check tick_icon"></i> : null}
                            </button>
                        )
                    })
                }</div>
            </div>
            <div className="price_range_div">
                <h3 className='price_name'>Price</h3>
                <p>{price/100}</p>
                <input type="range" 
                min={minPrice}
                max={maxPrice}
                value={price}
                className="range"
                onChange={updateFilterValue}
                name="price"

                />
            </div>
            <button className='clear_filter_btn'
            type="button"
            onClick={clearFilter}>Clear Filters</button>
        </>
    )
}

export default FilterBarLeftSide