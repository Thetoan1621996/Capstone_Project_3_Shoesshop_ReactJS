import { createSlice } from "@reduxjs/toolkit";
import { ACCESSTOKEN, http, settings, USER_LOGIN } from "../util/config";
import { history } from "../index.js";
const initialState = {
  userLogin: settings.getStorageJson(USER_LOGIN)
    ? settings.getStorageJson(USER_LOGIN)
    : {},
  userProfile: {},
  orderData: {
    
  },
  userRegister: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },

    getProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
    orderAction: (state, action) => {
      state.orderData = action.payload;
    },
    signupAction: (state, action) => {
      state.userRegister = action.payload;
    },
  },
});

export const { loginAction, getProfileAction, orderAction, signupAction } =
  userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post("/api/users/signin", userLogin);

    const action = loginAction(result.data.content);
    dispatch(action);

    settings.setStorageJson(USER_LOGIN, result.data.content);
    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);
    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};
export const getProfileApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/users/getprofile");
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};

export const orderProductApi = (oderdata) => {
  console.log(oderdata)
  return async (dispatch) => {
    try {
      console.log(oderdata)
      let result = await http.post("/api/users/order", oderdata);
      const action = orderAction(oderdata);
      dispatch(action);
      alert(result.data.content);
      
    } catch (err) {
      alert("Thêm mới thất bại vui lòng kiểm tra lại");
    }
  };
};

export const updateProfileApi = (profile) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/api/Users/updateProfile", profile);
      const action = getProfileApi(result.data.content);
      dispatch(action);
      alert(result.data.content);
    } catch (err) {
      alert("Thất bại");
    }
  };
};

export const loginFacebookApi = (tokenFacebookApp) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/facebooklogin", {
      facebookToken: tokenFacebookApp,
    });
    const action = loginAction(result.data.content);
    dispatch(action);

    settings.setStorageJson(USER_LOGIN, result.data.content);
    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);
    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};

export const signupApi = (dataUser) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/api/users/signup", dataUser);
      const action = signupAction(result.data.content);
      dispatch(action);
      history.push("/login");
      alert(result.data.message);
    } catch (err) {
      alert("Email này đã được sử dụng. Vui lòng sử dụng email khác!");
    }
  };
};
