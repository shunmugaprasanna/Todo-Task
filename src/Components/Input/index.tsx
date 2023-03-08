import React from "react";

type InputType = {
  type: any;
  placeholder: string;
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
}: InputType) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} InputStyle`}
      ></input>
    </div>
  );
};

export default InputWrapper;
