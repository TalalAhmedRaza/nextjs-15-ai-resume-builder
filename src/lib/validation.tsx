import {z} from "zod"

const genInfo = z.string().trim().optional().or(z.literal(""));

export const generalInfoSch = z.object(
    {
        title : genInfo,
        description : genInfo
    }
)

export type genInfoType = z.infer<typeof generalInfoSch>;

export const personalInfoSchema = z.object({
    photo: z
      .custom<File | undefined>()
      .refine(
        (file) =>
          !file || (file instanceof File && file.type.startsWith("image/")),
        "Must be an image file",
      )
      .refine(
        (file) => !file || file.size <= 1024 * 1024 * 4,
        "File must be less then 4MB",
      ),
    firstName: genInfo,
    lastName: genInfo,
    jobTitle: genInfo,
    city: genInfo,
    country: genInfo,
    phone: genInfo,
    email: genInfo,
  });
  
  export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

  export const workExperienceSchema = z.object({
    workExperiences: z
      .array(
        z.object({
          position: genInfo,
          company: genInfo,
          startDate: genInfo,
          endDate: genInfo,
          description: genInfo,
        }),
      )
      .optional(),
  });
  
  export type WorkExperienceValues = z.infer<typeof workExperienceSchema>;
  
  export const educationSchema = z.object({
    educations: z
      .array(
        z.object({
          degree: genInfo,
          school: genInfo,
          startDate: genInfo,
          endDate: genInfo,
        }),
      )
      .optional(),
  });
  
  export type EducationValues = z.infer<typeof educationSchema>;
  
  export const skillsSchema = z.object({
    skills: z.array(z.string().trim()).optional(),
  });
  
  export type SkillsValues = z.infer<typeof skillsSchema>;
  
  export const summarySchema = z.object({
    summary: genInfo,
  });
  
  export type SummaryValues = z.infer<typeof summarySchema>;
  
  export const resumeSchema = z.object({
    ...generalInfoSch.shape,
    ...personalInfoSchema.shape,
    ...workExperienceSchema.shape,
    ...educationSchema.shape,
    ...skillsSchema.shape,
    ...summarySchema.shape,
 
  });
  
  export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
    id?: string;
    photo?: File | string | null;
  };