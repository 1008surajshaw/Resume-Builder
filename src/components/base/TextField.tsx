"use client";

import React, { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: string;
  width?: string;
  className?: string;
  error?: boolean;
  errorMsg?: string;
  register?: ReturnType<UseFormRegister<FieldValues>>;
  isPassword?: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    label,
    placeholder,
    type = "text",
    width = "w-full",
    className,
    error,
    errorMsg,
    register,
    isPassword,
  } = props;

  const [passwordVisiblity, setPasswordVisiblity] = useState<boolean>(false);
  return (
    <div
      className={`grid ${width} ${className} ${isPassword ? "relative" : ""}`}
    >
      <label
        className="text-[15px] font-medium text-slate-800 p-1 my-[1px]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={isPassword && passwordVisiblity ? "text" : type}
        placeholder={`@${placeholder ? placeholder : ""}`}
        className={`custom-input px-3 py-2 focus:outline-slate-200 bg-slate-50`}
        {...(register && register)}
      />
      {isPassword ? (
        <>
          {passwordVisiblity ? (
            <VisibilityOffIcon
              onClick={() => setPasswordVisiblity(false)}
              className="absolute text-[16px] cursor-pointer right-3 top-11"
            />
          ) : (
            <VisibilityIcon
              onClick={() => setPasswordVisiblity(true)}
              className="absolute text-[16px] cursor-pointer right-3 top-11"
            />
          )}
        </>
      ) : (
        <></>
      )}
      {error && <p className="p-1 text-sm text-red-600">*{errorMsg}</p>}
    </div>
  );
};

export default TextField;
