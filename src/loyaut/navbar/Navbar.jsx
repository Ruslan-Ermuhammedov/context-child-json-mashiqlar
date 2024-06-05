import React from 'react'
import { NavLink } from 'react-router-dom'
import '../navbar/Navbar.css'
import Buttons from '../../components/Buttons/Buttons'
import Inputs from '../../components/Inputs/Inputs'
function Navbar() {
  return (
    <nav className='Navbar'>
      <NavLink to={"/"}>
        Home
      </NavLink>
      <NavLink to={"/basket"}>
        Basket
      </NavLink>
      <NavLink to={"/card"}>
        Card
      </NavLink>
      <NavLink to={"/edit"}>
        Edit
      </NavLink>
      {/* <Buttons btnWidth={"200px"} btnBgCorlor={"blue"} btnPadding={"10px 29px"} btnColor={"white"} >
         Add To Basket
      </Buttons>
      <Inputs inputType={"text"} inputPlaceholder={"Ismingizni kriting"} inputClass={"nameInput"} /> */}
    </nav>
  )
}

export default Navbar
