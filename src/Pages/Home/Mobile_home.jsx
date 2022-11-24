import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/scss/Pages/_home.scss";
import { getProductApi } from "../../Redux/productReducer";
import '../../assets/scss/Pages/_mobile_home.scss'

export default function Mobile_home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);

  const { arrProduct } = useSelector((state) => state.productReducer);
  return (
    <div className="home_mobile">
      <div className="banner_mobile">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row bannerMobile_row">
                <div className="col-6 bannerMobile_left">
                  <img src="./img/carousel.png" alt="1" />
                </div>
                <div className="col-6 bannerMobile_right">
                  <h4>Adidas</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    quam?
                  </p>
                  <button className="buy_Mobile">Buy now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row bannerMobile_row">
                <div className="col-6 bannerMobile_left">
                  <img src="./img/carousel.png" alt="2" />
                </div>
                <div className="col-6 bannerMobile_right">
                  <h4>Adidas</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    quam?
                  </p>
                  <button className="buy_Mobile">Buy now</button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="product_mobile">
        <h2>Product Feature</h2>
        <div className="list_mobile">
          {arrProduct.map((prod, index) => {
            return (
              <div className="mobile_row row" key={index}>
                <div className="col-3 col1">
                  <img src={prod.image} alt="..." />
                </div>
                <div className="col-6 col2">
                  <h4>{prod.name}</h4>
                  <p>{prod.shortDescription.length > 30?prod.shortDescription.substr(0,30)+'...':prod.shortDescription}</p>
                  
                </div>
                <div className="col-3 col3">
                <p>{prod.price}$</p>
                  <NavLink to={`/detail/${prod.id}`}>Buy now</NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
