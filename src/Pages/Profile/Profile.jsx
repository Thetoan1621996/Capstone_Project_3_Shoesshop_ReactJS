import React from "react";
import "../../assets/scss/Page/profile.scss";
export default function Profile() {
  return (
    <>
      <div className=" my-3">
        <h3>Profile</h3>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-3 text-center">
            <img
              src="https://haycafe.vn/wp-content/uploads/2022/03/anh-chan-dung-1.jpg"
              alt="..."
            />
          </div>
          <div className="col-9">
            <form className="form-update">
              <div className="row">
                <div className="col-6">
                  <div className="form-group mb-2">
                    <p>Email</p>
                    <input
                      type="text"
                      className="form-control "
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <p>Name</p>
                    <input
                      type="text"
                      className="form-control "
                      name="name"
                      placeholder="Name"
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
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <p>Password</p>
                    <input
                      type="text"
                      className="form-control "
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between mt-3 align-items-center">
                    <div className="radio">
                      <span className="me-3">Gender</span>

                      <label className="male">
                        <input
                          type="radio"
                          name="radio"
                          defaultValue="true"
                          className="checkGender"
                          id="true"
                        />
                        <span className="checkmark" />
                        Male
                      </label>
                      <label className="female">
                        <input
                          type="radio"
                          name="radio"
                          defaultValue="falue"
                          className="checkGender"
                          id="falue"
                        />
                        <span className="checkmark" />
                        Female
                      </label>
                    </div>
                    <button className="btn btn-success ">Update</button>
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
                <thead >
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
