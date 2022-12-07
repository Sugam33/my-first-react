import React, {useState} from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai' 


const Counter = () => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <AiOutlinePlusCircle size={30} color ={'green'} onClick = {() => setCount(count + 1)}/>
            <h1>{count}</h1> 
            <AiOutlineMinusCircle size={30} color ={'red'} onClick = {() => setCount(count - 1)}/>
        </div>
    )
}

export default Counter