import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchProductApi } from '../../Redux/productReducer';
import { NavLink } from "react-router-dom";
import '../../assets/scss/Page/search.scss'
import orderBy from 'lodash/orderBy'
export default function Search() {

  const keywordRef = useRef("");
  const {arrProduct} = useSelector(state => state.productReducer)
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams();
  
  


  useEffect(() => {
   
     const keyword = searchParams.get('keyword')
     if(keyword){
        const action = searchProductApi(keyword)
        dispatch(action)
     }
   }, [keywordRef.current]);
   const handleChange = (e) => {
     const {id,value} = e.target
     keywordRef.current  = value
   };
   const handleSubmit = (event) => {
     event.preventDefault()
 
    
     setSearchParams({
         keyword:keywordRef.current
     })
   };

   


  return (
    <div className='container my-5'>
      <h5>Search</h5>
      <form action="" className='d-flex align-items-center' onSubmit={handleSubmit}>
        
        
        <input type="text" name="search" id="keywordRef" placeholder='Product name...' className='form-control w-50 me-4' onChange={handleChange} />
       
        <button className='btn '>search</button>
      </form>

      <div className="title-2">
      <h2 className='my-4'>Search result</h2>
      </div>
    <div className="product">
      <p>Price</p>
      <form action="">
        <select className='form-control w-50'>
            <option value="decrease" onClick={()=>{
              ascending()
            }}>decrease</option>
            <option value="ascending">ascending</option>
        </select>
      </form>

      <div className="row my-5 product_list">
      {arrProduct.map((prod, index) => {
            return (
              <div className="col-4 col" key={index}>
                <div className="card">
                  <div className="image" >
                    <img src={prod.image} alt="..." style={{height:'300px' , width:'350px'}} />
                  </div>
                  <div className="card-body">
                    <h4>{prod.name}</h4>
                    <p>{prod.shortDescription.length > 50?prod.shortDescription.substr(0,50)+'...':prod.shortDescription}</p>
                  </div>
                  <div className="card_footer">
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
    </div>
  )
}
