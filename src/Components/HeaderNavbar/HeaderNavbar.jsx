import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/scss/Component/_headerNavbar.scss";

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
           {  "Profile " }
        </NavLink>
        
        </div>
      );
    }
    return (
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    );
  };

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
            <NavLink to="/cart" className="nav-link">
              <i className="fa fa-cart-plus"></i>
              <span>({cart.length})</span>
            </NavLink>
          </div>
          <div>
           {renderLogin()}
          </div>
          <div>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
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
