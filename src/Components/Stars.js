import React from 'react'
import "./SingleProduct.css"

const Stars = ({stars,reviews}) => {
  return (
   
<>
       {
        Array.from({length:5},(curEle,i)=>{
            let number = i+.5;
            return <span>{stars>=i+1 ? ( <i class="fa-solid fa-star star_icon_full"></i> ): stars >=number ?(<i class="fa-solid fa-star-half-stroke star_icon_half"></i>):(<i class="fa-regular fa-star star_icon_blank"></i>)}</span>
        })
       }
</>
        
        
        
    // <i class="fa-solid fa-star star_icon_full"></i>
    // <i class="fa-solid fa-star-half-stroke star_icon_half"></i>
    // <i class="fa-regular fa-star star_icon_blank"></i>

  )}
export default Stars