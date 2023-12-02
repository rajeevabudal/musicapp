import React from "react";
import { Input } from "antd";
const InputComp = ({ placeHolder, className, onKeyDown }) => (
  <Input placeholder={placeHolder} className={className} onKeyDown={onKeyDown}/>
);
export default InputComp;
