export interface ResumeBuilderForm {
    personalDetails: {
        name: string;
        age: number;
        image:string |  null; 
        profession: string;
        email: string;
        city: string | null;
        mobile: string | null;
        description: string;
        languages: string[] | null;
        linkedInLink: string|null;
        personalPortfolio:string |null;
    };
    workExperience?: {
        jobTitle: string | null;
        companyName: string | null;
        startingDateOfEmployment: string | null; 
        endDateOfEmployment: string | null; 
        jobDescriptionAndResponsibilities: string | null;
    }[];
    education: {
        degreeObtained: string;
        universityAttended: string;
        qualifyingYear: string;
    }[];
    skills: {
        skillTitle: string;
    }[];
    projects?: {
        title: string | null;
        description: string | null;
    }[];
    achievements?: {
        title: string;
        description: string;
    }[];
}
