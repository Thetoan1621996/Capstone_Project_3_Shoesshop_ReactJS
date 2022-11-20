import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/scss/Component/_headerNavbar.scss";
import { ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";

export default function HeaderNavbar() {
  const { cart } = useSelector((state) => state.productReducer);

  const { userLogin } = useSelector((state) => state.userReducer);

  const renderLogin = () => {
    if (userLogin.email) {
      return (
        <div className="d-flex">
          <NavLink to="/profile" className={"nav-link"}>
          {" "}
          <i class="fa fa-user mx-1"></i> 
           Hi! {userLogin.email.length > 10?userLogin.email.substr(0,8)+'...':userLogin.email}
        </NavLink>
        <button className="btn text-danger " onClick={()=>{
          settings.eraseCookie(ACCESSTOKEN,0)
          localStorage.removeItem(USER_LOGIN)
          localStorage.removeItem(ACCESSTOKEN)
          window.location.href='login'

        }}> <i class="fa fa-sign-out-alt"></i>Logout</button>
        </div>
      );
    }
    return (
      <div className="d-flex">
        <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
      <NavLink to="/register" className="nav-link">
        Register
      </NavLink>
    </div>
      
      
    );
  };

  const renderCart = ()=> {
    if(settings.getStore(ACCESSTOKEN)){
      return <NavLink to="/cart" className="nav-link">
      <i className="fa fa-cart-plus"></i>
      <span>({cart.length})</span>
    </NavLink>
    }return(
    <NavLink to="/login" className="nav-link">
              <i className="fa fa-cart-plus"></i>
              <span>({cart.length})</span>
            </NavLink>)

  }

  return (
    <div className="container">
      <div
        className="row header"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <div className="logo col-8">
          <NavLink className="nav-link" to="/">
            {" "}
            <img src="./img/logo.png" alt="logo" style={{ width: 100 }} />
          </NavLink>
        </div>
        <div className="nav col-4">
          <div>
            <NavLink className="nav-link" to="/search">
              <i className="fa fa-search"></i> Search
            </NavLink>
          </div>
          <div>
           {renderCart()}
          </div>
          <div>
           {renderLogin()}
          </div>
         
        </div>
      </div>
      <div className="link">
        <NavLink to="/">Home</NavLink>
        <NavLink>Men</NavLink>
        <NavLink>Woman</NavLink>
        <NavLink>Kid</NavLink>
        <NavLink>Sport</NavLink>
      </div>
    </div>
  );
}
