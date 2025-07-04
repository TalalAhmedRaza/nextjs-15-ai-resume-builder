import ResumeEditor from "@/app/(main)/editor/resumeEditor";
import { Metadata } from "next";

export const metadata : Metadata ={
  title:"Design your resume"
}

export default function Page() {
  return (
    <main>
      <ResumeEditor />
    </main>
  );
}