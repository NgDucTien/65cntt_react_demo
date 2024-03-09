import React , { useState } from 'react';


function Welcome({text , color}){
    //logic
    // Khởi tạo state mới có tên là 'count'
    const [count, setCount] = useState(0);
    
    
    //view
    return (
    <div> helo
        <p>message từ component cha là 
            <b>{text}</b>
        </p>
    </div>);
}
export default Welcome ; 
export const Goodbye = () => {
    return (
    <div> day la component goodbye</div>
     )
}