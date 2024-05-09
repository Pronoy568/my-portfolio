import EducationAnimation from "./EducationAnimation";
import EducationCard from "./EducationCard";

export interface MyEducation {
  _id: string;
  date: string;
  certificate: string;
  name: string;
  description: string;
}
export interface MyEducationCardProps {
  item: MyEducation;
}

const Education = async () => {
  const res = await fetch(`${process.env.BACKEND_API}/educations`, {
    next: {
      revalidate: 30,
    },
  });
  const data: MyEducation[] = await res.json();

  return (
    <div id="education" className="py-14 container">
      {/* education */}

      <div className="text-4xl font-semibold justify-center item-center flex space-x-2">
        <span className="text-[#ffffff]">MY</span>
        <span className="text-[#5ee4ae]">EDUCATION</span>
      </div>
      <div className="md:mt-20 mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* education */}
        <div>
          {data?.map((education) => (
            <EducationCard key={education._id} item={education} />
          ))}
        </div>
        {/* educationAnimation */}
        <div className="box p-3">
          <EducationAnimation />
        </div>
      </div>
    </div>
  );
};

export default Education;
