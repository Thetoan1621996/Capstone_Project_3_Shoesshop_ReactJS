import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "../../assets/scss/Pages/_mobile_detail.scss";
import { addToCart, getProductDetailApi } from "../../Redux/productReducer";

export default function Mobile_detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProductDetailApi(id);
    dispatch(action);
  }, [id]);

  let quantity = 1;
  const tangGiamSoLuong = (num, giatri) => {
    if (giatri) {
      quantity += num;
    } else {
      if (quantity > 1) {
        quantity -= num;
      }
    }
    document.querySelector("#quantity").innerHTML = quantity;
    return quantity;
  };

  return (
    <div className="container detail">
      <div className="product_detail">
        <div className="detail_img">
          <img src={productDetail.image} alt="detail" />
        </div>
        <div className="detail_text">
          <h4>{productDetail.name}</h4>
          <p className="des">{productDetail.description}</p>
          <h5>Available size</h5>
          <div className="d-flex row_size">
            {productDetail.size?.map((size, item) => {
              return (
                <button className="size" key={item}>
                  {size}
                </button>
              );
            })}
          </div>
          <p className="price">{productDetail.price}$</p>
          <div className="edit_quantity">
            <button
              className="increase"
              onClick={() => {
                tangGiamSoLuong(1, true);
              }}
            >
              +
            </button>
            <span id="quantity">1</span>
            <button
              className="reduce"
              onClick={() => {
                tangGiamSoLuong(1, false);
              }}
            >
              -
            </button>
          </div>
          <button
            className="add"
            onClick={() => {
              const newCart = { ...productDetail, quantity: quantity };
              const action = addToCart(newCart);
              dispatch(action);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      <h3 className="title">-Related Product-</h3>
      <div className="row_related">
        {productDetail.relatedProducts?.map((prod, index) => {
          return (
            <div className="row related_mobile" key={index}>
              <div className="imageMobile_related col-3">
                <img className="mobile_image" src={prod.image} alt="..." />
              </div>
              <div className="bodyMobile_related col-5">
                <h4>{prod.name}</h4>
                <p>
                  {prod.shortDescription.length > 30
                    ? prod.shortDescription.substr(0, 30) + "..."
                    : prod.shortDescription}
                </p>
              </div>
              <div className="footerMobile_related col-4">
                <p>{prod.price}$</p>
                <NavLink to={`/detail/${prod.id}`}>Buy now</NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
