import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, http, settings, USER_LOGIN } from '../util/config';


const initialState = {
    userLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) :{},
    userProfile:{

    },
    orderData:{}
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction:(state,action)=>{
        state.userLogin = action.payload
    },

    getProfileAction:(state,action) =>{
        state.userProfile =action.payload
      }, 
      orderAction:(state,action)=>{
        state.orderData = action.payload
       }
  }
});

export const {loginAction,getProfileAction,orderAction} = userReducer.actions

export default userReducer.reducer


export const loginApi = (userLogin) =>{
    return async dispatch =>{
        const result = await http.post('/api/users/signin',userLogin)
    
        const action = loginAction(result.data.content)
        dispatch(action)
        
    
        settings.setStorageJson(USER_LOGIN,result.data.content)
        settings.setStorage(ACCESSTOKEN,result.data.content.accessToken)
        settings.setCookie(ACCESSTOKEN,result.data.content.accessToken,30)
    }
}
export const getProfileApi = () =>{
    return async dispatch =>{
      
        const result = await http.post('/api/users/getprofile')
        const action = getProfileAction(result.data.content)
        dispatch(action)
      
     
    }
  }

  
export const orderProductApi = (oderdata) =>{
    return async dispatch =>{
      try{
        let result = await http.post('/api/users/order',oderdata);
        alert(result.data.content)
      }catch (err){
        alert('Thêm mới thất bại vui lòng kiểm tra lại')
      }
      
    }
  }