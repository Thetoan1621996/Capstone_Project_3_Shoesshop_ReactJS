import React, { useEffect, useState } from 'react'


/**
 * 
 * @param {*} props  props: nhận vào là object {component: <abc/>,mobileComponent: <xyz/>}
 * @returns 
 */

export default function ResponseItem(props) {

    const [screen,setScreen] = useState({
        width: window.innerWidth,
        height:window.innerHeight
    });


    useEffect(()=>{

        const handleSetSceen = ()=>{
            setScreen({
                width:window.innerWidth,
                height:window.innerHeight
            })

        } 
        // Khi kích thước màn hình thay đổi sẽ cập nhật vào state
        window.addEventListener('resize',handleSetSceen);

        return ()=>{
            // Khi screen.width thay đổi hoặc component mất khỏi giao diện sẽ clear sự kiện onresize
            window.removeEventListener('resize',handleSetSceen)
        }
    },[screen.width]); // nếu width thay đổi thì sẽ chạy đoạn code này

    let Component = props.component;
    if(screen.width < 765 && props.mobileComponent){
        Component = props.mobileComponent
    }
  return (
    <Component/>
  )
}
