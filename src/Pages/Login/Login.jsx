import React from "react";
import "../../assets/scss/Page/login.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginApi } from "../../Redux/userReducer";
import {NavLink} from 'react-router-dom'
export default function Login() {
  const dispatch = useDispatch();

  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Email không đúng định dạng !"),
      password: yup
        .string()
        .required("Vui lòng nhập mật khẩu của bạn")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Phải chứa 8 ký tự, một chữ hoa, một chữ thường, một số và một ký tự đặc biệt"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = loginApi(values);
      dispatch(action);
      
    },
  });

  return (
    <div className="container mb-5">
      <h3 className="my-5"> Login </h3>
      <hr />
      <form className="w-50 m-auto pt-5 " onSubmit={frm.handleSubmit}>
        <div className="form-group email ">
          <p className="mb-3">Email</p>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          {frm.errors.email ? (
            <span className="text-danger text mt-3 ms-2"> {frm.errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mt-3 password">
          <p className="mb-3a">Password</p>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
            onChange={frm.handleChange}
          />
           {frm.errors.password ? (
            <span className="text-danger text mt-3 ms-2"> {frm.errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mt-3 d-flex justify-content-end align-items-center login">
          <NavLink to="/register" className="text-decoration-none mx-3">
            Register now ?
          </NavLink>
          <button className="btn " type="submit">Login</button>
        </div>
        <div className="form-group loginfb">
          <button className="btn w-100  mt-3">
            <i class="fab fa-facebook-square px-1"></i> Continue with facebook
          </button>
        </div>
      </form>
    </div>
  );
}
