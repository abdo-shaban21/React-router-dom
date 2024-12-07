// import React from 'react'

import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [,] =useState()
  return (
    <nav className='navbar'>
        <div className="logo"><h2>logo</h2></div>
        <ul>
            <NavLink to="/home" end>home</NavLink>
            <NavLink to="about">about</NavLink>
            <NavLink to="service">Service</NavLink>
            <NavLink to="contact_us">Contact us</NavLink>
           
        </ul>
        {/* <div className="login"><h4> <NavLink to="/login">login</NavLink></h4></div> */}
    </nav>
  )
}
