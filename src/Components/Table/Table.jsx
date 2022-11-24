import { Table } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, deleteProd } from "../../Redux/productReducer";
import { NavLink } from "react-router-dom";
import "../../assets/scss/Component/_table.scss";
import Cart from "../../Pages/Cart/Cart";
import { orderAction, orderProductApi } from "../../Redux/userReducer";


const columns = [
  {
    title: "ID",
    dataIndex: "id",
    align:'center',
    responsive: ["sm"]
  },
  {
    title: "Image",
    dataIndex: "image",
    align:'center',
    responsive: ["lg"]
  },
  {
    title: "Name",
    dataIndex: "name",
    align:'center'
  },
  {
    title: "Price",
    dataIndex: "price",
    align:'center'
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    align:'center',
    responsive: ["lg"]
  },
  {
    title: "Total",
    dataIndex: "total",
    align:'center'
  },
  {
    title: "Action",
    dataIndex: "action",
    align:'center'
  },
];

const ProductTable = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.productReducer);

  const data = cart.map((prod,index) => {
    return {
      key:index,
      id: prod.id,
      image: <img src={prod.image} className="img" width={100} />,
      name: prod.name,
      price: prod.price,
      quantity: (
        <>
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
          <span className="quantity">{prod.quantity}</span>
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
        </>
      ),
      total: (prod.quantity * prod.price).toLocaleString(),
      action:<>
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
    </>
    };
  });
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys,selectedRows) => {
   
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    // console.log ('haha',selectedRows);
    let orderDetails = selectedRows.reduce((orderArr,prod,index)=>{
      let addProd = {
        productId: prod.id,
        quantity:prod.quantity.props.children[1].props.children
      }
      orderArr.push(addProd);
      return orderArr
    },[])
    // console.log(orderDetails)
    let orderData = {
      orderDetail: orderDetails,
      email:''
    }
    const action = orderAction(orderData)
    dispatch(action)
     
  
   };
   

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };


 
  return (
     <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
  );
};
export default ProductTable;
