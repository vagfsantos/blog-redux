import React from "react";
import PropTypes from "prop-types";

const InputText = ({ label, placeholder, onChange, value, type }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      {type === "textarea" ? (
        <textarea
          onChange={onChange}
          className="textarea"
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          onChange={onChange}
          className="input"
          type="text"
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  </div>
);

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputText;
