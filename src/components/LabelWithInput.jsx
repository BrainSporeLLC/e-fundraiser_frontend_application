import React from "react";

const LabelWithInput = ({ type = "text", id, name, onChange, placeholder='', children }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        aria-label={children}
        placeholder={placeholder}
        required
      />
      <span aria-live="polite"></span>
    </div>
  );
};

export default LabelWithInput;
