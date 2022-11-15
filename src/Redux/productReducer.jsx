import { createSlice } from "@reduxjs/toolkit";
import { http } from "../util/config";


const initialState = {
  arrProduct: [],
  productDetail:{},
  cart:[]
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getArrProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailActon:(state,action)=>{
      state.productDetail = action.payload;
    },
    addToCart:(state,action)=>{
      const itemCart = action.payload;
      const item = state.cart.find((prod)=>prod.id ===itemCart.id)
      if(item){
        //nếu đã có trong giỏ hàng thì tăng số lượng lên
        item.quantity = item.quantity + itemCart.quantity
      }else{
        // nếu chưa có trong giỏ hàng thì thêm vào
        state.cart.push(itemCart)
      }
    },
    changeQuantity:(state,action)=>{
      const {id,quantity} = action.payload
      const item = state.cart.find(item=>item.id === id)
      item.quantity += quantity
    },
    deleteProd:(state,action)=>{
      const id = action.payload
      state.cart = state.cart.filter((prod)=>prod.id !== id)
    }
  },
});

export const { getArrProductAction,getProductDetailActon,addToCart,changeQuantity,deleteProd } = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispatch) => {
    let result = await http.get('/api/Product');
    const action = getArrProductAction(result.data.content);
    dispatch(action);
  };
};


export const getProductDetailApi = (id) =>{
  return async (dispatch) =>{
    let result = await http.get('/api/product/getbyid?id='+id)
    const action = getProductDetailActon(result.data.content)
    dispatch(action)
  }
}
