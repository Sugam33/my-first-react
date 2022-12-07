import React from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai' 


const Counter = () => {
    return(
        <div>
            <AiOutlinePlusCircle size={30} color ={'green'}/><h1>0</h1> <AiOutlineMinusCircle size={30} color ={'red'}/>
        </div>
    )
}

export default Counter