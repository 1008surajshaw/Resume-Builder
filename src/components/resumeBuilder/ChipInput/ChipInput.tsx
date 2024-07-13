import React, { useState, useEffect } from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormGetValues } from 'react-hook-form';

type Props = { 
  name: string; 
  label: string;
  placeholder: string; 
  register: UseFormRegister<any>;
  errors: FieldErrors; 
  setValue: UseFormSetValue<any>; 
  getValues: UseFormGetValues<any>; 
};

const ChipInput = ({ name, label, placeholder, register, errors, setValue, getValues }: Props) => {
  const [chips, setChips] = useState<string[]>([]);

  useEffect(() => {
    register(name, { required: true });
  }, [register, name]);

  useEffect(() => {
    setValue(name, chips);
  }, [chips, setValue, name]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();

      const chipValue = (event.target as HTMLInputElement).value.trim();
      if (chipValue && !chips.includes(chipValue)) {
        const newChips = [...chips, chipValue];
        setChips(newChips);
        (event.target as HTMLInputElement).value = "";
      }
    }
  };

  const handleDeleteChip = (chipIndex: number) => {
    const newChips = chips.filter((_, index) => index !== chipIndex);
    setChips(newChips);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      <div className="flex w-full flex-wrap gap-y-2">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="m-1 flex items-center rounded-full bg-yellow-400 px-2 py-1 text-sm text-richblack-5"
          >
            {chip}
            <button
              type="button"
              className="ml-2 focus:outline-none"
              onClick={() => handleDeleteChip(index)}
            >
              ×
            </button>
          </div>
        ))}
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className="form-style w-full"
        />
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
};

export default ChipInput;
