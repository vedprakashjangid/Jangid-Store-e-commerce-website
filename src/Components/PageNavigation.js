import React from 'react'
import { NavLink } from 'react-router-dom'
import "./PageNavigation.css"

const PageNavigation = ({title}) => {
  return (
    <div className='navigation'><NavLink to="/" className="navi">Home</NavLink>/{title}</div>
  )
}

export default PageNavigation