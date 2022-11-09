import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import {Provider} from 'react-redux'
import {Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { store } from './Redux/configStore';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Detail from './Pages/Detail/Detail'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import Register from './Pages/Register/Register'
import Search from './Pages/Search/Search'


export const history = createBrowserHistory()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='detail' element={<Detail/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='search' element={<Search/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='*' element={<Navigate to=''/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>

  </Provider>
);


