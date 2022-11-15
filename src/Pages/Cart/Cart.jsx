import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/scss/Pages/_cart.scss";
import { changeQuantity, deleteProd } from "../../Redux/productReducer";

export default function Cart() {
  const { cart } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const renderButton = () =>{
    console.log(cart.length)
    if(cart.length !== 0){
      return  <button type="submit" className="submit">
      SUBMIT ORDER
    </button>
    }
    return 
   
  }

  return (
    <div className="carts">
      <h3>Carts</h3>
      <hr />
      <table className="table">
        <thead className="table_head">
          <tr>
            <td>ID</td>
            <td>Img</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod, index) => {
            return (
              <tr key={index}>
                <td>{prod.id}</td>
                <td>
                  <img src={prod.image} alt="..." className="img" />
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <button
                    className="addition"
                    onClick={() => {
                      const action = changeQuantity({
                        id: prod.id,
                        quantity: 1,
                      });
                      dispatch(action);
                    }}
                  >
                    +
                  </button>
                  <span>{prod.quantity}</span>
                  <button
                    className="subtraction"
                    onClick={() => {
                      if (prod.quantity > 1) {
                        const action = changeQuantity({
                          id: prod.id,
                          quantity: -1,
                        });
                        dispatch(action);
                      }
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{(prod.price * prod.quantity).toLocaleString()}</td>
                <td>
                  <NavLink className="edit" to={`/detail/${prod.id}`}>
                    EDIT
                  </NavLink>
                  <button
                    className="delete"
                    onClick={() => {
                      const action = deleteProd(prod.id);
                      dispatch(action);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="order">
         {renderButton()}
          </div>
    </div>
  );
}
