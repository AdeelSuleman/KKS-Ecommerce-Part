import React from "react";
import Certificate1 from "../../assets/Certificates/C1.png";
import Certificate2 from "../../assets/Certificates/C2.png";
import Certificate3 from "../../assets/Certificates/C3.png";
import Certificate4 from "../../assets/Certificates/C4.png";

const Certification = () => {
  // Array of objects with alt text for SEO
  const Certificates = [
    { src: Certificate1, alt: "Certification 1" },
    { src: Certificate2, alt: "Certification 2" },
    { src: Certificate3, alt: "Certification 3" },
    { src: Certificate4, alt: "Certification 4" },
  ];

  return (
    <section className="overflow-hidden xs:pt-6 xs:pb-12 md:py-16 xl:pb-20">
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
        className="mx-auto mt-10 px-5 grid gap-y-16 items-center
                xs:w-[80vw] xs:grid-cols-2 xs:gap-x-6
                sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4
                xl:w-7xl xl:gap-x-10"
      >
        {Certificates.map((Certi, i) => (
          <div key={i} className="flex flex-col items-center justify-center bg-white aspect-square overflow-hidden">
            <img 
              src={Certi.src}
              alt={Certi.alt}
              // width and height help the browser reserve space (prevents CLS)
              width="212"
              height="212"
              loading="lazy"
              decoding="async"
              className="xs:w-[80%] sm:w-2/4 max-w-[212px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;