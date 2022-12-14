import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "../../assets/scss/Pages/_detail.scss";
import { addToCart, getProductDetailApi } from "../../Redux/productReducer";

export default function Detail() {
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
              const newCart = {...productDetail,quantity:quantity};
              const action = addToCart(newCart)
              dispatch(action)
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      <h3 className="title">-Related Product-</h3>
      <div className="row_related row">
        {productDetail.relatedProducts?.map((prod, index) => {
          return (
            <div className="col-4 related" key={index}>
              <div className="card related_card">
                <div className="image_related">
                  <img src={prod.image} alt="..." />
                </div>
                <div className="card-body body_related">
                  <h4>{prod.name}</h4>
                  <p>{prod.shortDescription.length > 30?prod.shortDescription.substr(0,30)+'...':prod.shortDescription}</p>
                </div>
                <div className="card_footer footer_related">
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
  );
}
