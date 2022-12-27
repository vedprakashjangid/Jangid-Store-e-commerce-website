import React from 'react'
import "./Service.css"

const Service = () => {
  return (
    <>
      <div className="service_container">
        <div className="left_service">
          <i className="fa-solid fa-truck icon"></i>
          <p className='icon_detail'>Free and fast delivery</p>
        </div>
        <div className="middle_service">
          <div className="top">
          <i class="fa-solid fa-people-arrows icon"></i>
            <p className='icon_detail'>non contact shipping</p>
          </div>
          <div className="bottom">
          <i class="fa-solid fa-wallet icon"></i>
            <p className='icon_detail'>money back guarantee</p>
          </div>
        </div>
        <div className="right_service">
          <i className="fa-solid fa-shield-halved icon"></i>
          <p className='icon_detail'>super secure payment system</p>
        </div>
      </div>
    </>
  )
}

export default Service