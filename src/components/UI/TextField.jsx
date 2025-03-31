import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;
// default parametres
const TextField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </InputWrapper>
  );
};

export default TextField;
