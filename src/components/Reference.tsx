export type ReferenceProps = {
  name: string;
  position: string;
  company: string;
  email: string;
  number: string;
  relationship: string;
};

export const Reference = ({
  name,
  position,
  company,
  email,
  number,
  relationship,
}: ReferenceProps) => (
  <div className="flex flex-col mb-3 mt-5 items-center">
    <h3 className="text-gray-100 text-2xl font-bold mb-2">{name}</h3>
    <p className="text-gray-100 text-1xl">{position}</p>
    <p className="text-gray-100 text-1xl">{company}</p>
    <a href="mailto: vithayathilf@aetna.com" className="text-gray-100 text-1xl">
      {email}
    </a>
    <a href="tel:8635134134" className="text-gray-100 text-1xl">
      {number}
    </a>
    <p className="text-gray-100 text-1xl">Relationship: {relationship}</p>
  </div>
);
