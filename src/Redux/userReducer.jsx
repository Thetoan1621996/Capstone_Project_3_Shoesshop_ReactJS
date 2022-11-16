import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, http, settings, USER_LOGIN } from '../util/config';

const initialState = {
    userLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) :{},
    userProfile:{

    }
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
      }
  }
});

export const {loginAction,getProfileAction} = userReducer.actions

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