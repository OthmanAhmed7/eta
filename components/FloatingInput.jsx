import React from "react";

const FloatingInput = ({ label, type, value, name, onChange, required }) => {
  return (
    <div className="relative w-full group">
      <label
        className={`absolute top-[20%] ${
          name === "name" || name === "phone" ? "left-[6%]" : "left-[3%]"
        } ${value ? "top-[-25%] text-[0.85rem] bg-white px-1" : ""} ${
          name === "name" || name === "phone"
            ? "group-focus-within:left-[4%]"
            : "group-focus-within:left-[2%]"
        } text-slate-500 bg-transparent transition-all duration-300 pointer-events-none group-focus-within:bg-white group-focus-within:top-[-25%] group-focus-within:text-[0.85rem] group-focus-within:px-1`}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        className="floating-input"
      />
    </div>
  );
};

export default FloatingInput;
