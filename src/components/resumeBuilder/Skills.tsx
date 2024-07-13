import FormContainer from "./Forms/FormContainer";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import SkillsForm from "./SkillsForm";

interface SkillsProps {
  id: string;
  isOpen: string;
  title: string;
}
interface UserSkillsValue {
  name:string
  yoe:string
}

const Skills: React.FC<SkillsProps> = ({ id, isOpen, title }) => {
  const [skillList, setSkillList] = useState<UserSkillsValue[]>([]);
  const [formReset, setFormReset] = useState<boolean>(false);

  const addSkill: SubmitHandler<UserSkillsValue> = (data) => {
    if (
      skillList.filter((ele) =>
        ele.name.toLocaleLowerCase().includes(data.name.toLocaleLowerCase())
      ).length === 0
    ) {
      setSkillList([...skillList, data]);
      setFormReset(!formReset); 
    } else {
      console.log("one")
    }
  };

  const saveSkills = async() => {
     console.log("one")
    }
  ;

  return (
    <>
        <FormContainer
        title={title}
        id={id}
        isOpen={isOpen}
        onSubmit={addSkill}
        FormComponent={SkillsForm}
        list={skillList}
        setList={setSkillList}
        formReset={formReset}
        addSkillBtn
        saveSkills={saveSkills}
      />
    </>
  );

}
export default Skills;










