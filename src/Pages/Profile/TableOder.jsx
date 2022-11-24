import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../assets/scss/Page/profile.scss'
export default function TableOder(props) {
    
  
 
    const oder = props.orderDetail
    
   const renderOder = () =>{
    return oder.map((item,index)=>{
      
        
        return <tr key={index}>
            <td>{props.id}</td>
            <td><img src={item.image} alt="..."  style={{width:'50px'}}/></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{(item.quantity) }</td>
            <td>{(item.quantity * item.price).toLocaleString()  }</td>
        </tr>
    })
   }
  return (
    <tbody>
        {renderOder()}
    </tbody>
  )
}
