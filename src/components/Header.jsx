import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  let headerStyle = {
    textAlign: 'center',
  }
  return (
    <div>
      <h1 style={headerStyle}>Help Queue!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  )
}

export default Header
