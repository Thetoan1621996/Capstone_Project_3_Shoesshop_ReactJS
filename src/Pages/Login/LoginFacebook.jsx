import React from 'react'
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFacebookApi } from '../../Redux/userReducer';
export default function LoginFacebook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const responseFacebook = async (response) => {
        const action = loginFacebookApi(response.accessToken);
        await dispatch(action);
        navigate("/profile");
      }
  return (
    <div>

<FacebookLogin
    appId="3370436146566282"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="btn w-100  mt-3"
    icon="fab fa-facebook-square px-1"
  />




    </div>
  )
}
