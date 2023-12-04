import React from "react";
import { Input } from "antd";
const InputComp = ({ placeHolder, className, onKeyUp }) => (
  <Input placeholder={placeHolder} className={className} onKeyUp={onKeyUp}/>
);
export default InputComp;
