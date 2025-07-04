
import generalInfoForm from "./forms/generalInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import { EditorFormProps } from "@/lib/types";
import EducationForm from "./forms/EducationForm";

export const steps: {
    title: string;
    component: React.ComponentType<EditorFormProps>;
    key: string;
  }[] = [
    { title: "General info", component: generalInfoForm, key: "general-info" },
    { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
    {
      title: "Work experience",
      component: WorkExperienceForm,
      key: "work-experience",
    },
    {
      title: "Education",
      component: EducationForm,
      key: "education",
    },
    {
      title: "Skills",
      component: SkillsForm,
      key: "skill",
    },
    {
      title: "Summary",
      component: SummaryForm,
      key: "summary",
    },
  ]