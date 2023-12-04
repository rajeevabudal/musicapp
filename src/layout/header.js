import React from "react";
import {useDispatch} from "react-redux";
import MenuComp from "../core/menu";
import InputComp from "../core/input";
import {searchSong} from "../redux/movieslice";
import "./layout.css";
const HeaderComp = () => {
  const dispatch = useDispatch();
  const handleInput=(e)=>{
    if(e.key === "Enter"){
      dispatch(searchSong(e.target.value))
    }
  }
  return (
    <>
      <MenuComp
      />
      <InputComp
        placeHolder="Search for the Song / Artist / Album"
        className="headerInput"
        onKeyUp={(e)=>handleInput(e)}
      />
    </>
  );
};
export default HeaderComp;
