import React from "react";

type InputType = {
  type?: any;
  disabled?:any
  placeholder?: string;
  name?: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWrapper = ({
  className,
  type,
  placeholder,
  name,
  value,
  onChange,
  disabled = false,
}: InputType) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} InputStyle`}
        disabled={disabled}
      />
    </>
  );
};

export default InputWrapper;
