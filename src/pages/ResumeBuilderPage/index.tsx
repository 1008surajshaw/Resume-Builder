import React ,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { CandidateProfileMenu } from '../../Data/data';
import MainContainer from '../../layout/ResumeBuilderFormLayout/MainContainer';
import SideNavigationBar from '../../components/resumeBuilder/SideNavigationBar';
import RightContainer from '../../components/resumeBuilder/RightContainer';
import PersonalInfo from '../../components/resumeBuilder/PersonalInfo';
import Skills from '../../components/resumeBuilder/Skills';
import EducationHistory from '../../components/resumeBuilder/EducationHistory';
import WorkExperience from '../../components/resumeBuilder/WorkExperience';

const ResumeCreation = () => {
  const { id } = useParams();
  const [active, setActive] = useState(CandidateProfileMenu[0].id);

  return (
    <div>
    <MainContainer>
      <SideNavigationBar
        active={active}
        setActive={setActive}
        menuItems={CandidateProfileMenu}
      />
      <RightContainer>
        <PersonalInfo
          isOpen={active}
          title="Personal Information"
          id="personalInfo"
        />
        <Skills isOpen={active} title="Skills" id="skills" />
        <WorkExperience
          isOpen={active}
          title="Work Experience"
          id="workExp"
        />
        <EducationHistory isOpen={active} title="Education" id="education" />
      </RightContainer>
    </MainContainer>
  </div>
  );
};

export default ResumeCreation;
