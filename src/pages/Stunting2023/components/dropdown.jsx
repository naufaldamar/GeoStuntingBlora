import React from "react";

const Dropdown = ({ options = [], selectedOption, onChange, className }) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      {Array.isArray(options) &&
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
};

export default Dropdown;
