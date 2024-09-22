import React from 'react'
import "./todo.css";
const Header = ({title}) => {
  return (
    <header>

    <h1>{title.toUpperCase()}</h1>
    </header>
  )
}

export default Header