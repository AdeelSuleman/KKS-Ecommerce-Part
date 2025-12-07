import React from "react";
import Certificate1 from "../../assets/Certificates/C1.png";
import Certificate2 from "../../assets/Certificates/C2.png";
import Certificate3 from "../../assets/Certificates/C3.png";
import Certificate4 from "../../assets/Certificates/C4.png";

const Certification = () => {
  const Certificates = [Certificate1, Certificate2, Certificate3, Certificate4];

  return (
    <section className="overflow-hidden xs:pt-6 xs:pb-12 md:py-16 xl:pb-20 ">
      <h1
        className="font-Poppins font-bold text-textPrimary
                xs:text-Heading4 xs:text-center 
                md:text-Heading3 
                lg:text-Heading3
                xl:text-Heading2"
      >
        CERTIFICATIONS
      </h1>
      <div
        className="mx-auto mt-10 px-5 grid  gap-y-16 items-center
                xs:w-[80vw] xs:grid-cols-2 xs:gap-x-6
                sm:grid-cols-2  lg:grid-cols-4 lg:gap-x-4
                xl:w-7xl xl:gap-x-10"
      >
        {Certificates.map((Certi, i) => (
          <div key={i} className="flex flex-col items-center-safe bg-white">
            <img 
                src={Certi}
                className="xs:w-[80%]  sm:w-2/4 max-w-[212px]"  />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
