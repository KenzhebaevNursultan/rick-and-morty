import React from "react";
import styled from "styled-components";

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #333;

  input {
    accent-color: #007bff;
  }
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Switcher = ({
  name,
  options = [],
  selectedValue,
  onChange,
  disabled,
}) => {
  return (
    <RadioGroup>
      {options.map((option) => (
        <RadioLabel key={option.value}>
          <RadioInput
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            disabled={disabled}
          />
          {option.label}
        </RadioLabel>
      ))}
    </RadioGroup>
  );
};

export default Switcher;
