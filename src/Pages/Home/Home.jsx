import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/scss/Pages/_home.scss";
import { getProductApi} from "../../Redux/productReducer";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);

  const { arrProduct } = useSelector((state) => state.productReducer);
  return (
    <div className="home">
      <div className="banner">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row banner_row">
                <div className="col-8 banner_left">
                  <img src="./img/carousel.png" alt="1" />
                </div>
                <div className="col-4 banner_right">
                  <h3>Adidas</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    quam?
                  </p>
                  <button className="buy_now">Buy now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row banner_row">
                <div className="col-8 banner_left">
                  <img src="./img/carousel.png" alt="2" />
                </div>
                <div className="col-4 banner_right">
                  <h4>Adidas</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    quam?
                  </p>
                  <button className="buy_now">Buy now</button>
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
      <div className="product">
        <h2>Product Feature</h2>
        <div className="product_list row">
          {arrProduct.map((prod, index) => {
            return (
              <div className="col-4 col" key={index}>
                <div className="card">
                  <div className="image" style={{ height: 300 }}>
                    <img src={prod.image} alt="..." />
                  </div>
                  <div className="card-body">
                    <h4>{prod.name}</h4>
                    <p>{prod.shortDescription.length > 50?prod.shortDescription.substr(0,50)+'...':prod.shortDescription}</p>
                  </div>
                  <div className="card_footer">
                    <div className="d-flex">
                      <NavLink to={`/detail/${prod.id}`}>Buy now</NavLink>
                      <p>{prod.price}$</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
