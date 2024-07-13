import TextField from "../base/TextField";
import React, { useEffect } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import SkillPicker from "./SkillPicker";
import Dropdown from "../base/Dropdown";
import { YearsOfExp } from "../../Data/data";

interface UserSkillsValue extends FieldValues {
  name: string;
  yoe: string;
}

interface SkillsFormProps extends UseFormReturn<UserSkillsValue> {
  isOpen: boolean;
  formReset?: boolean;
}

const SkillsForm: React.FC<SkillsFormProps> = ({
  register,
  reset,
  formState: { errors },
  isOpen,
  formReset,
  setValue,
}) => {
  useEffect(() => reset(), [formReset]);

  return (
    <div className={`${isOpen ? "flex h-fit" : "hidden"} w-full`}>
      <TextField
        register={register("name", {
          required: "Please add name of the skill.",
        })}
        className="mr-1"
        width="w-1/2"
        label="Name"
        placeholder="Add Skill"
        error={!!errors.name}
        errorMsg={errors.name?.message}
      />
      <Dropdown
        className="ml-1"
        width="w-1/2"
        label="Years of Exp"
        placeholder="@years of exp"
        menuOptions={YearsOfExp}
        register={register("yoe", { required: "Please mentions years of exp" })}
        setValue={setValue}
        name="yoe"
        error={!!errors.yoe}
        errorMsg={errors.yoe?.message}
      />
    </div>
  );
};

export default SkillsForm;
