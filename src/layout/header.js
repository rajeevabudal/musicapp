import React from "react";
import MenuComp from "../core/menu";
import InputComp from "../core/input";
import "./layout.css";
const HeaderComp = () => {
  const handleInput=(e)=>{
    console.log(e.target.value)
  }
  return (
    <>
      <MenuComp
      />
      <InputComp
        placeHolder="Search for the Song / Artist / Album"
        className="headerInput"
        onKeyDown={handleInput}
      />
    </>
  );
};
export default HeaderComp;
