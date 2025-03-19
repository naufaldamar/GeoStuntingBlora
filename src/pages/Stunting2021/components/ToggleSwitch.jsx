import React from "react";
import "./toggleswitch.css";

const ToggleSwitch = ({ label, isChecked, onToggle }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle-switch"
        checked={isChecked}
        onChange={onToggle}
      />
      <label htmlFor="toggle-switch">{label}</label>
    </div>
  );
};

export default ToggleSwitch;
