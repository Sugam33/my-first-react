import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {setCount(count + 1)}
  const handleMinus = () => {setCount(count > 0 ? count - 1 : count)} 
  return (
    <div>
      <AiOutlinePlusCircle
        size={30}
        color={"green"}
        //onClick={() => setCount(count + 1)}
        onClick = {handlePlus}
      />
      <h1>{count}</h1>
      <AiOutlineMinusCircle
        size={30}
        color={"red"}
        //onClick={() => setCount(count > 0 ? count - 1 : count)}
        onClick ={handleMinus}
      />
    </div>
  );
};

export default Counter;
