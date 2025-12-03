import React from "react";
import Certificate1 from "../../assets/Certificates/C1.png";
import Certificate2 from "../../assets/Certificates/C2.png";
import Certificate3 from "../../assets/Certificates/C3.png";
import Certificate4 from "../../assets/Certificates/C4.png";

const Certification = () => {
  const Certificates = [Certificate1, Certificate2, Certificate3, Certificate4];

  return (
    <section className="overflow-hidden xs:py-10 md:py-16 xl:py-20">
      <h1
        className="text-center text-textPrimary font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
      >
        CERTIFICATIONS
      </h1>
      <div
        className="mx-auto mt-20 px-5 grid gap-5 items-center
                xs:w-[95vw] xs:grid-cols-1
                sm:grid-cols-2
                xl:w-[1280px] lg:grid-cols-4"
      >
        {Certificates.map((Certi) => (
          <div className="flex flex-col items-center-safe">
            <img 
                src={Certi}
                className="w-2/4 max-w-[212px]"  />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
