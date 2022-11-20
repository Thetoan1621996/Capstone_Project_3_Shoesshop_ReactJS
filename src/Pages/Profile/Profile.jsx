import React from "react";
import "../../assets/scss/Page/profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileApi, updateProfileApi } from "../../Redux/userReducer";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Profile() {
  const { orderData } = useSelector((state) => state.userReducer);
  const { userProfile } = useSelector((state) => state.userReducer);
  console.log(userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionAsync = getProfileApi();
    dispatch(actionAsync);
  }, []);

  const frm = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: "",
      password: "",
      gender: true,
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
      phone: yup
        .number()
        .typeError("Số điện thoại không đúng định dạng")
        
        .required("Số điện thoại không được bỏ trống"),
    }),
    onSubmit: (value) => {
      console.log(value);
      const actionApi = updateProfileApi(value);
      dispatch(actionApi);
    },
  });

  return (
    <>
      <div className=" my-3">
        <h3>Profile</h3>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-3 text-center">
            <img src={userProfile.avatar} alt="..." />
          </div>
          <div className="col-9">
            <form className="form-update" onSubmit={frm.handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group mb-2">
                    <p>Email</p>
                    <input
                      type="text"
                      className="form-control "
                      name="email"
                      placeholder={userProfile.email}
                      onChange={frm.handleChange}
                      value={frm.email}
                    />
                    {frm.errors.email ? (
                      <span className="text-danger text mt-4 ms-2">
                        {" "}
                        {frm.errors.email}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <p>Name</p>
                    <input
                      type="text"
                      className="form-control "
                      name="name"
                      placeholder={userProfile.name}
                      onChange={frm.handleChange}
                      value={frm.name}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group mb-2">
                    <p>Phone</p>
                    <input
                      type="text"
                      className="form-control "
                      name="phone"
                      placeholder={userProfile.phone}
                      onChange={frm.handleChange}
                      value={frm.phone}
                    />
                    {frm.errors.phone ? (
                      <span className="text-danger text mt-4 ms-2">
                        {" "}
                        {frm.errors.phone}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <p>Password</p>
                    <input
                      type="text"
                      className="form-control "
                      name="password"
                      placeholder="Password"
                      onChange={frm.handleChange}
                      value={frm.password}
                    />
                     {frm.errors.password ? (
            <span className="text-danger text mt-4 ms-2"> {frm.errors.password}</span>
          ) : (
            ""
          )}
                  </div>
                  <div className="form-group d-flex justify-content-between mt-3 align-items-center">
                    <div className="radio">
                      <span className="me-3">Gender</span>

                      <label className="male" onChange={frm.handleChange}>
                        <input
                          type="radio"
                          name="gender"
                          value="true"
                          className="checkGender"
                          id="true"
                        />
                        <span className="checkmark" />
                        Male
                      </label>
                      <label className="female" onChange={frm.handleChange}>
                        <input
                          type="radio"
                          name="gender"
                          value="false"
                          className="checkGender"
                          id="false"
                        />
                        <span className="checkmark" />
                        Female
                      </label>
                    </div>
                    <button className="btn btn-success " type="submit">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="oder ">
          <div className="title d-flex">
            <h4 className="active">Oder history</h4>
            <h4 className="px-3">Favourite</h4>
          </div>
          <div className="list-oder mt-5">
            <div className="oder-item px-5">
              <p>+ Oder have been placed on 09-19-2022</p>
              <table className="table ">
                <thead>
                  <tr>
                    <td className="py-3">Id</td>
                    <td>Img</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src="https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg"
                        alt="..."
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>Product 1</td>
                    <td>1000</td>
                    <td>1</td>
                    <td>1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="num text-end mt-5">
            <button className="btn btn-light ">
              {" "}
              <i class="fa fa-chevron-left"></i>{" "}
            </button>
            <button className="btn ">1</button>

            <button className="btn ">2</button>
            <button className="btn ">...</button>

            <button className="btn ">9</button>
            <button className="btn ">10</button>
            <button className="btn ">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
