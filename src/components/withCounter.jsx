import React from "react";
import { useState } from "react";
const UpdatedComponent = (OriginalComponent, increaseCount, newColor) => {  //original component gets here gets either hoverincrease or click inc component
  function NewComponent(props) { //original component is referred to as wrapped component
    const [counter, setCounter] = useState(10);
    const [color , setColor] = useState("blue")
    const changeColor = () => {
        setColor(newColor)
    }
    return (
      <OriginalComponent
        name="LogRocket"
        counter={counter}
        incrementCounter={() => setCounter((size) => size + increaseCount)}
        color ={color}
        changeColor = {changeColor}
      />
    );
  }
  return NewComponent;
};
export default UpdatedComponent;