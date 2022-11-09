import React from 'react'
import '../../assets/scss/Component/_footer.scss'

export default function Footer() {
  return (
    <div className='footer container'>
      <div className="row row_edit">
        <div className="left col-4">
          <h5>GET HELP</h5>
          <p>Home</p>
          <p>Nike</p>
          <p>Adidas</p>
          <p>Contact</p>
        </div>
        <div className="col-4 middle">
          <h5>SUPPORT</h5>
          <p>About</p>
          <p>Contact</p>
          <p>Help</p>
          <p>Phone</p>
        </div>
        <div className="col-4 right">
          <h5>REGISTER</h5>
          <p>Register</p>
          <p>Login</p>
        </div>
      </div>
      <div className='copy_right'>
        <p>© 2022 Cybersoft All Rights Reserved | Design by Simon</p>
      </div>
    </div>
  )
}
