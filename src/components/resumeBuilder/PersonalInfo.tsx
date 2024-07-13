// components/PersonalInfo.tsx
import React from "react";
import { SubmitHandler } from "react-hook-form";
import FormContainer from "./Forms/FormContainer";
import PersonalInfoForm, { PersonalInfoValues } from "./PersonalInfoForm";

interface PersonalInfoProps {
  title: string;
  id: string;
  isOpen: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ title, id, isOpen }) => {
  const onSubmit: SubmitHandler<PersonalInfoValues> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer<PersonalInfoValues>
      title={title}
      id={id}
      isOpen={isOpen}
      onSubmit={onSubmit}
      FormComponent={PersonalInfoForm}
    />
  );
};

export default PersonalInfo;
