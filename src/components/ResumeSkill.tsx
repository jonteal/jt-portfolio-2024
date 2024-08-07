export type ResumeSkillProps = {
  skillName: string;
  skills: string;
};
export const ResumeSkill = ({ skillName, skills }: ResumeSkillProps) => (
  <div className="flex flex-col items-center">
    <h3 className="text-gray-100 mt-5 font-bold text-xl">{skillName}</h3>
    <p className="text-gray-100">{skills}</p>
  </div>
);
