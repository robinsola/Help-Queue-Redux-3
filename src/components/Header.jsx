import React from 'react'
import { Link } from 'react-router-dom'
import epi from '../assets/images/epi.jpg'

function Header(){

  return (
    <div>
      <style jsx>{`
          img {
            width: 40px;
          }
          h1 {
            text-align: center;
          }
          .flexMe {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .flexMe:nth-of-type(1) {
            margin-left: 50px;
          }
          .flexMe:last-of-type {
            margin-right: 50px;
          }
          `}
      </style>
      <div className="flexMe">
        <div>
          <img src={epi}/>
        </div>
        <div>
          <h1>Help Queue!</h1>
        </div>
        <div>
          <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/admin">Admin</Link>
        </div>
      </div>
    </div>
  )
}



export default Header
