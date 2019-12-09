import React from "react";
import { SelectMenuItem } from "../../models/Hotel";

interface SelectInputProps {
  name: string;
  label: string;
  onChange: any;
  defaultOption: string;
  value: number;
  error?: string;
  options?: SelectMenuItem[];
}

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options
}: SelectInputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options!.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
