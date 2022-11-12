import React from 'react'
import '../../assets/scss/Page/login.scss'
export default function Login() {
  return (
    <div className='container'>
      <h3 className='my-5'> Login </h3>
      <hr />
      <form className='w-50 m-auto pt-5'>
          
          <div className="form-group email ">
            <p className='mb-3'>Email</p>
            <input type="email" name="email" id="email" className='form-control' placeholder='Email' />
          </div>
          <div className="form-group mt-3 password">
            <p className='mb-3a'>Password</p>
            <input type="password" name="password" id="password" className='form-control' placeholder='Password'/>
          </div>
          <div className="form-group mt-3 d-flex justify-content-end align-items-center login">
            <a href="#" className='text-decoration-none mx-3'>
              Register now ?
            </a>
            <button className='btn '>Login</button>
          </div>
          <div className="form-group loginfb">
            <button className='btn w-100  mt-3'>
            <i class="fab fa-facebook-square px-1"></i> Continue with facebook
            </button>
          </div>
      </form>

    </div>
  )
}
