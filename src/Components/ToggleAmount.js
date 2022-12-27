import React from 'react'

const ToggleAmount = ({amount,setIncrease,setDecrease}) => {
  return (
    <div className='plus_minus_btn'>
        <button onClick={setDecrease} className="minus_btn"><i class="fa-solid fa-minus" ></i></button>
       <div className="amount"> {amount}</div>
        <button onClick={setIncrease} className="plus_btn"><i class="fa-solid fa-plus" ></i></button>
    </div>
  )
}

export default ToggleAmount