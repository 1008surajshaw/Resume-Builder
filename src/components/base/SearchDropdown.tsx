import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Cities } from "../../Data/data";

interface CitiesOption {
  name: string;
  countryCode: string;
}

interface SearchDropDownProps {
  label: string;
  width?: string;
  placeholder?: string;
  className?: string;
}

const SearchDropdown: React.FC<SearchDropDownProps> = ({
  label,
  width = "w-full",
  placeholder = "",
  className,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const [filteredCities, setFilteredCities] = useState<CitiesOption[]>(Cities);

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
    setTyping(value !== "");
  }, []);

  const handleClick = (option: CitiesOption) => {
    setInputValue(`${option.name}, ${option.countryCode}`);
    setTyping(false);
  };

  const memoizedFilteredCities = useMemo(
    () => filteredCities,
    [filteredCities]
  );

  useEffect(() => {
    if (inputValue === "") {
      setFilteredCities(Cities);
      setTyping(false);
    } else {
      const cityFromFilter = Cities.filter((city) =>
        city.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredCities(cityFromFilter);
    }
  }, [inputValue]);

  return (
    <div className={`${width} ${className} grid relative`}>
      <label
        className="text-[15px] font-medium text-slate-800 p-1 my-[1px]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="px-3 py-2 focus:outline-slate-200 bg-slate-50"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => {
          const isAlpha = /^[a-zA-Z]$/.test(e.key);
          if (isAlpha && e.key !== "Backspace") setTyping(true);
        }}
      />
      <div
        className={`${
          typing ? "absolute top-[4.75rem] w-full z-10" : "hidden"
        } h-40 border bg-slate-50 rounded-md py-1 px-2 my-1 overflow-y-auto`}
      >
        {memoizedFilteredCities.map((ele, index) => (
          <p
            key={`${ele.name}-${index}`}
            onClick={() => handleClick(ele)}
            className="text-lg text-center font-light py-[2px] px-2 border-b border-gray-200 cursor-pointer hover:scale-105 transition delay"
          >
            {ele.name}, {ele.countryCode}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;
