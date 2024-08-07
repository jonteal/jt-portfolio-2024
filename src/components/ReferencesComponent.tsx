import { Reference } from "./Reference";

const references = [
  {
    id: 1,
    name: "Francis Vithayathil",
    position: "Digital Senior Development Engineer I",
    company: "CVS Health / Aetna",
    email: "vithayathilf@aetna.com",
    number: "863-513-4134",
    relationship: "Team Member",
  },
  {
    id: 2,
    name: "Mason Holland",
    position: "Digital Development Engineer III",
    company: "CVS Health / Aetna",
    email: "hollandm2@aetna.com",
    number: "310-415-8457",
    relationship: "Team Member",
  },
  {
    id: 3,
    name: "Ivan Ontiveros",
    position: "Digital Development Engineer I",
    company: "CVS Health / Aetna",
    email: "ontiverosi@aetna.com",
    number: "602-576-3985",
    relationship: "Team Member",
  },
  {
    id: 4,
    name: "Laurel Thorburn",
    position: "Software Developer",
    company: "Shopify",
    email: "laurelthorburn@gmail.com",
    number: "408-250-5504",
    relationship: "Shared project contributor",
  },
  {
    id: 5,
    name: "Robert Parsons",
    position: "Software Developer",
    company: "2U / formerly Trilogy",
    email: "rmpcoding@gmail.com",
    number: "626-703-1909",
    relationship: "Fellow tutor",
  },
];

export const ReferencesComponent = () => (
  <div className="resume-body-container border w-screen rounded-xl flex flex-col items-center bg-gray-800 pt-7">
    <h1 className="text-gray-100 text-4xl font-bold mb-3">Jon Jackson</h1>
    <h2 className="text-gray-100 text-3xl font-bold mb-3">References</h2>

    {/* REFERENCES */}

    {references.map((reference) => (
      <Reference
        name={reference.name}
        position={reference.position}
        company={reference.company}
        email={reference.email}
        number={reference.number}
        relationship={reference.relationship}
      />
    ))}
  </div>
);
