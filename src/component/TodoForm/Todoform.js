import React, { useState } from "react";
import "./Todoform.css";
import AddItemIcon from "../../Svg/Add_item.svg";
function Todoform(props) {
  const [Input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: Input,
    });
  };
  return (
    <form className="Add_list" onSubmit={handleSubmit}>
      <input
        id="task"
        type="text"
        placeholder="Whats on your mind today ....."
        value={Input}
        onChange={handleChange}
      />
      <div className="img">
        <img src={AddItemIcon} alt="sad" onClick={handleSubmit} />
      </div>
    </form>
  );
}

export default Todoform;
