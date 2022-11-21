import React from "react";
import { Input,Form } from "antd";
import "../../assets/scss/Pages/_register.scss";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import {signupApi} from '../../Redux/userReducer'

export default function Register() {


  const dispatch = useDispatch();

  const frm = useFormik({
    initialValues:{
      email:'',
      password:'',
      name:'',
      phone:'',
      password1:''
      
    },
    validationSchema: yup.object().shape({
      email:yup.string().email("Email không hợp lệ").required('Vui lòng nhập email'),
      password:yup
      .string()
      .required("Vui lòng nhập mật khẩu của bạn")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Mật khẩu phải chứa 8 ký tự, một chữ hoa, một chữ thường, một số và một ký tự đặc biệt"
      ),
      password1:yup.string().required('Vui lòng nhập lại mật khẩu').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Mật khẩu nhập lại không đúng'),
      name: yup.string().required('Vui lòng nhập tên của bạn').matches(/^[A-Za-z]+$/,"Tên phải là ký tự"),
      phone: yup.string().required('Vui lòng nhập số điện thoại').matches(/^\d+/,'Số điện thoại không hợp lệ'),
      
     
    }),
    onSubmit:(values)=>{
      let gender = document.querySelector('.testChecked').checked
      let newValue = {
        email: values.email,
        password: values.password,
        name:values.name,
        gender: gender,
        phone:values.phone
      }
      const action = signupApi(newValue)
      dispatch(action)
    }
  })

  return (
    <div className="register">
      <form onSubmit={frm.handleSubmit}>
      <h3>Register</h3>
      <hr />
      <div className="row">
        <div className="col-5">
          <div className="form-group">
            <p>Email</p>
            <Input type="text" id="email" name="email" placeholder="email" className="input" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            <span className="error">{frm.errors.email}</span>
          </div>
          <div className="form-group">
            <p>Password</p>
            <Input.Password
              placeholder="password"
              id="password"
              name="password" onChange={frm.handleChange} onBlur={frm.handleBlur}
            />
            <span className="error">{frm.errors.password}</span>
          </div>
          <div className="form-group">
            <p>Password confirm</p>
            <Input.Password
              placeholder="password confirm"
              id="password1"
              name="password1" onBlur={frm.handleBlur} onChange={frm.handleChange} 
            />
            <span className="error">{frm.errors.password1}</span>
          </div>
        </div>
        <div className="col-5">
          <div className="form-group">
            <p>Name</p>
            <Input type="text" id="name" name="name" placeholder="name" className="input" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            <span className="error">{frm.errors.name}</span>
          </div>
          <div className="form-group">
            <p>Phone</p>
            <Input placeholder="phone" id="phone" name="phone" className="input" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            <span className="error">{frm.errors.phone}</span>
          </div>
          <div className="gender">
            <span>Gender</span>
            <div className="row radio">
              <div className="col-6">
                <input
                  id="male"
                  type="radio"
                  className="testChecked"
                  value="true"
                  name="gender"
                  defaultChecked
                />
                <p className="label">Male</p>
              </div>
              <div className="col-6">
                <input
                  id="female"
                  type="radio"
                  className="testChecked"
                  value="false"
                  name="gender"
                />
                <p className="label female">Female</p>
              </div>
            </div>
          </div>
          <button className="btn-res" type="submit">Submit</button>
        </div>
      </div>
      </form>
      
    </div>
  );
}
