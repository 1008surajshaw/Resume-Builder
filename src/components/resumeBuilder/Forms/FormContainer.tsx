import React from "react";
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";
// import { SaveFilled, PlusCircleOutlined } from "@ant-design/icons";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface UserSkillsValue {
  name:string
  yoe:string
}

interface FormContainerProps<T extends FieldValues> {
  title: string;
  id: string;
  isOpen: string;
  onSubmit: SubmitHandler<T>;
  FormComponent: React.FC<
    UseFormReturn<T> & { isOpen: boolean } & { formReset?: boolean }
  >;
  list?: UserSkillsValue[];
  setList?: React.Dispatch<React.SetStateAction<UserSkillsValue[]>>;
  formReset?: boolean;
  addSkillBtn?: boolean;
  saveSkills?: () => void; 
}

const FormContainer = <T extends FieldValues>({
  title,
  id,
  isOpen,
  onSubmit,
  FormComponent,
  list,
  formReset,
  setList,
  addSkillBtn,
  saveSkills,
}: FormContainerProps<T>) => {
  const methods = useForm<T>();

  return (
    <div className="w-full py-3 px-5 rounded-md border">
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium">{title}</p>
          {isOpen === id && (
            <div>
              {addSkillBtn && (
                <button
                  type="submit"
                  className="text-md font-light text-primary hover:bg-red-50  mx-2 px-3 py-[7px] rounded-md"
                >
                  Add Skill
                </button>
              )}
              <button
                type="button" 
                onClick={saveSkills}
                className="text-md font-light text-white bg-primary px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          )}
        </div>
        <FormComponent
          {...methods}
          isOpen={isOpen === id}
          formReset={formReset}
        />
      </form>
      {list && list.length > 0 && (
        <div className="flex w-full justify-start flex-wrap p-3 border border-slate-100 shadow-sm rounded-md my-5">
          {list &&
            list.map((item) => (
              <div
                key={item.name} // Added key to each item
                className={`flex w-fit justify-evenly items-center px-3 py-1 mr-2 rounded-full border  bg-slate-100 `}
              >
                <p className={`text-center  font-light text-lg text-green-500`}>
                  {item.name}
                </p>
                {/* <RemoveCircleIcon
                  onClick={() =>
                    setList?.(list.filter((ele) => ele.name !== item.name))
                  }
                  className="text-lg ml-2 text-slate-300 cursor-pointer"
                /> */}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FormContainer;
