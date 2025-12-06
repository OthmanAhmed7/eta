import React from "react";

const FloatingInput = ({
  className,
  label,
  type,
  value,
  name,
  onChange,
  required,
}) => {
  return (
    <div className="relative w-full group">
      <label className={className}>{label}</label>

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
