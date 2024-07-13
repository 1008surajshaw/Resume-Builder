import React from "react";
import { ResumeBuilderForm } from "../interfaces/resumeForm";
import { Country, City } from "country-state-city";


export const formData: ResumeBuilderForm = {
  personalDetails: {
    name: "Mariana Anderson",
    age: 30,
    profession: "Marketing Manager",
    email: "hello@yourmail.com",
    city: "Any City",
    image:"ciencienicnoe",
    mobile: "123-456-7890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing kcxkk ckrmcm omqxmo comfoc give me sun sun dimdimrc    la   elit...",
    languages: ["English", "Spanish"],
    linkedInLink:"https://linkedin.com/nicr/56",
    personalPortfolio:"http://personportfolio.com"
    
  },
  workExperience: [
    {
      jobTitle: "Marketing Manager",
      companyName: "Company Name",
      startingDateOfEmployment: "2019",
       endDateOfEmployment: "2022",
      jobDescriptionAndResponsibilities: "Lorem ipsum dolor sit amet...",
    },
    {
      jobTitle: "Assistant Manager",
      companyName: "Company Name",
      startingDateOfEmployment: "2017",
       endDateOfEmployment: "2019",
      jobDescriptionAndResponsibilities: "Lorem ipsum dolor sit amet...",
    },
  ],
  education: [
    {
      degreeObtained: "Degree",
      universityAttended: "University/College",
      qualifyingYear: "2008",
    },
    {
      degreeObtained: "Degree",
      universityAttended: "University/College",
      qualifyingYear: "2010",
    },
  ],
  skills: [
    { skillTitle: "UI/UX" },
    { skillTitle: "Visual Design" },
    
  ],
  projects: [
     {title:"project1",
      description:"la la al a la adin "
     }
    
  ],
  achievements: [
    {
      title: 'Achievement 1',
      description: 'Description of Achievement 1',
    },
    {
      title: 'Achievement 2',
      description: 'Description of Achievement 1',
    }
  ]
}


export const CandidateProfileMenu = [
  {id:"personalInfo",label:"Personal Information"},
  {id:"skills",label:"Skills"},
  {id:"workExp",label:"Work Experiences"},
  {id:"education",label:"Education"},
]

export interface Option {
  title: string;
  id: number | string;
}
export const YearsOfExp:Option[] = [
  {id:"1-2",title:"1-2 years"},
  {id:"2-5",title:"2-5 years"},
  {id:"5-7",title:"5-7 years"},
  {id:"8+",title:"8+ years"},
]

export const EmploymentType = [
  {id:"fulltime",label:"Full time"},
  {id:"parttime",label:"Part time"},
  {id:"contract",label:"Contract"},
  {id:"temporary",label:"Temporary"},
  {id:"freelance",label:"Freelance"},
]

export const Cities = City.getAllCities().map(ele=>{
  return {name:ele.name,countryCode:ele.countryCode}
})