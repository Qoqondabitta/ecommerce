import React from "react";
import "./input.css";
import { useSelector } from "react-redux";

const InputGroup = React.memo(({ onChange }) => {
  const l = useSelector((store) => store.language.value);
  return (
    <div className="input-group">
      <input placeholder="Search" onChange={onChange} />
      <label className="inputLabel">
        {l == "ENG" ? "Search" : l == "UZB" ? "Qidiring" : "Искать"}
      </label>
    </div>
  );
});

export default InputGroup;
