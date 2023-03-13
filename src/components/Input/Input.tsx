import React, { EventHandler, SyntheticEvent, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

type InputPropType = {
  label?: string;
  name?: string;
  onChange?: (changedValue : any, key: any) => void;
  value?: any;
  type: string;
};

const Input = ({ label, name, onChange, value, type }: InputPropType) => {
  const [active, setActive] = useState(false)
  const [valid, setValid] = useState(false);

  useEffect(()=>{
    if(value.length===0){
      setActive(false);
      setValid(false);
    }else{
      setValid(true);
    }
    console.log(value,"useeffect")
  },[value])

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { value: changedValue, name: changedKey } = e.target ;
    setValid(changedValue.length > 0);
    if(onChange){
      onChange(changedValue,changedKey);
    }
  };
  
  const inputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setActive(false);
  };

  const inputFocus = (e : React.FocusEvent<HTMLInputElement>) =>{
    setActive(true)
  }
  
  const className = `input ${active?'active':''} ${valid?"valid":''}`;

  return (
    <div className="input-container">
      <input
        className={className}
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        onFocus={inputFocus}
        onBlur={inputBlur}
        value={value}
      />
      <label className="label" htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;
