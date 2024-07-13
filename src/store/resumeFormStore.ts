import { ResumeBuilderForm } from "../interfaces/resumeForm";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PartialResumeBuilderForm = Partial<ResumeBuilderForm>;

type ResumeBuilderFormStore = {
    formData: ResumeBuilderForm | null;
    updateFormData: (data: PartialResumeBuilderForm) => void;
    clearFormData: () => void;
};

const useResumeBuilderStore = create<ResumeBuilderFormStore>()(
    persist(
        (set, get) => ({
            formData: null,
            updateFormData: (data: PartialResumeBuilderForm) => {
                //@ts-ignore
                set((state) => ({
                    formData: {
                        ...state.formData,
                        ...data,
                    },
                }));
            },
            clearFormData: () => {
                set({ formData: null });
            },
        }),
        {
            name: "resume-builder-storage", 
            storage: createJSONStorage(() => localStorage), 
        }
    )
);

export default useResumeBuilderStore;
