import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer_attachment">
          <div className="attachment_detail">
           <p className="attachment_para">
           get the latest product at resonable price and at best discount of 60% +more
           </p>
          </div>
          <div className="attachment_button">
            <button className='get_started_btn'> <NavLink to="/products" className='get_started'>get Started</NavLink></button>
          </div>

        </div>
        <div className="footer_data_container">
          <div className="channel_name">
            <h3 className="footer_title">Jangid Channel</h3>
            <p className="footer_para">Lorem ipsumisicing elit. Molestias, cumque.</p>
          </div>
          <div className="subscribe_section">
            <h3 className="footer_title">subscribe to get latest videos</h3>
            <input type="text" placeholder='search...' />
            <br />
            <button className='subscribe_btn'>Subscribe</button>
          </div>
          <div className="social_media_icons">
            <h3 className="footer_title">follow us on</h3>
            <div className="media_icon_common_div">
            <div className="media_icon_div">
              <i class="fa-brands fa-youtube social_icons"></i>
            </div>
            <div className="media_icon_div">
              <i class="fa-brands fa-instagram social_icons"></i>
            </div>

            <div className="media_icon_div">
              <i class="fa-brands fa-facebook social_icons"></i>
            </div>

            </div>
          </div>
          <div className="call_us">
            <h3 className="footer_title">call us</h3>
            <p className="footer_para">+91 7415797732</p>
          </div>
        </div>
   
      
         </footer>
    </>
  )
}

export default Footer