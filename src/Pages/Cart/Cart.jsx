import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/Pages/_cart.scss";
import ProductTable from "../../Components/Table/Table";
import { orderProductApi } from "../../Redux/userReducer";


export default function Cart() {
const {orderData} = useSelector(state =>state.userReducer)
// console.log(orderData)
const dispatch = useDispatch()


  const renderButton = () => {
  
    if (orderData?.orderDetail?.length !== 0 && orderData?.orderDetail?.length !== undefined) {
      return (
        <button type="submit" className="submit" onClick={()=>{
          orderAction()
        }}>
          SUBMIT ORDER
        </button>
      );
    }
    return;
  };
  const orderAction = () =>{
      const action = orderProductApi(orderData)
      dispatch(action)
  }


  return (
    <div className="carts">
      <h3>Carts</h3>
      <hr />
      <ProductTable />
      <div className="order">{renderButton()}</div>
    </div>
  );
}
