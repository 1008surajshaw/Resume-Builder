import React, { Dispatch, SetStateAction, useState } from "react";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

export interface Option {
  title: string;
  id: number | string;
}

interface DropdownProps {
  label: string;
  width?: string;
  className?: string;
  placeholder?: string;
  menuOptions: Option[];
  required?: boolean;
  register?: ReturnType<UseFormRegister<any>>;
  setValue: UseFormSetValue<any>;
  name: string;
  error?: boolean;
  errorMsg?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  width = "w-full",
  className,
  placeholder = "",
  menuOptions,
  required = false,
  register,
  setValue,
  name,
  error,
  errorMsg,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleClick = (value: string) => {
    setSelectedOption(value);
    setValue(name, value);
    setIsOpen(false);
  };
  return (
    <div className={`${width} ${className} grid relative`}>
      <label
        className="text-[15px] font-medium text-slate-800 p-1 my-[1px]"
        htmlFor={label}
      >
        {label}
        {required && selectedOption === "" && (
          <span className="text-[16px] font-light text-primary">*</span>
        )}
      </label>
      <input
        className="px-3 py-2 focus:outline-slate-200 bg-slate-50"
        type="text"
        placeholder={placeholder}
        value={selectedOption}
        readOnly
        {...(register && register)}
      />
      {error && <p className="p-1 text-sm text-red-600">*{errorMsg}</p>}
      <div
        className={`${
          isOpen ? "absolute top-[4.5rem] w-full z-10" : "hidden"
        } h-28 border bg-slate-50 rounded-md py-1 px-2 my-1 overflow-y-auto`}
      >
        {menuOptions &&
          menuOptions.length > 0 &&
          menuOptions.map((option) => (
            <p
              key={option.id}
              className="text-lg text-center font-light py-[2px] px-2 border-b border-gray-200 cursor-pointer hover:scale-105 transition delay"
              onClick={() => handleClick(option.title)}
            >
              {option.title}
            </p>
          ))}
      </div>
      <KeyboardArrowDownOutlined
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-1 cursor-pointer text-3xl top-9"
      />
    </div>
  );
};

export default Dropdown;
