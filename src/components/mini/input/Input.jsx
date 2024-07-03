import React from 'react'
import "./input.css"

const InputGroup = ({onChange}) => {
  return (
    <div className="input-group">
      <input placeholder="Search" onChange={onChange} />
      <label className="inputLabel">Search</label>
    </div>
  );
};

export default InputGroup;