import React from "react";
import DynamicFormContainer from "./Forms/DynamicFormContainer";
import WorkExpForm from "./WorkExpForm";

interface WorkExperienceProps {
  id: string;
  isOpen: string;
  title: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  id,
  title,
  isOpen,
}) => {
  return (
    <DynamicFormContainer
      id={id}
      title={title}
      isOpen={isOpen}
      formComponent={WorkExpForm}
      btnTitle="Add Work Experience"
    />
  );
};

export default WorkExperience;
