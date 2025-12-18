import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/Logo/Logo2.png";
import { Link } from "react-router-dom";
import { Menus } from "./MenuData";
import { categories } from "../data/products";

const Footer = () => {
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const SocialIcons = [
    {
      icon: <FaFacebook/>,
      name: "Facebook",
      url: "https://www.facebook.com/share/1C6QNoDXFv/",
    },
    {
      icon: <RiInstagramFill/>,
      name: "Instagram",
      url: "https://www.instagram.com/kks_foods?igsh=dmpkenpzbHpxMnZw",
    },
    {
      icon: <FaTiktok/>,
      name: "Tik Tok",
      url: "https://www.tiktok.com/@kks.foods?_t=ZS-90QvFpMEhIl&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGn8fxZI_0-s-6diQKl_CEz-gXqrLDmX8u_ShyTOv63dHvnypyhqDwLsnkpWSA_aem_mcoWqQs6Cqhqx9sphpoQ7g",
    },
  ];
  return (
    <footer className="bg-FooterBg flex flex-col items-center-safe">
      <section
        className="px-5 grid gap-5
                    xs:w-[80vw] xs:pt-12 xs:pb-10
                    sm:grid-cols-3 sm:w-[95vw] 
                    lg:grid-cols-4 lg:pt-14 lg:pb-12
                    xl:w-7xl xl:grid-cols-5 xl:py-20"
      >
        {/* Logo & Socail Icons */}
        <div className="flex flex-col items-center-safe md:items-start">
          <img src={Logo} alt="Logo" className="xs:w-[200px] lg:w-[180px] xl:w-[230px]" />
          <div className="grid grid-cols-3 p-3 gap-5 xs:w-fit xl:mx-auto">
            {SocialIcons.map((socail, index) => (
              <div key={index} className="text-Heading5 xl:text-Heading4">
                <Link to={socail.url}>
                  {/* <img
                    src={socail.icon}
                    alt={socail.name}
                    className="w-8 h-7"
                  /> */}
                  {socail.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center-safe relative">
          <div className="flex flex-col items-center-safe w-full sm:w-40">
            <h1 className="font-Poppins font-bold text-Paragraph6 text-btnPrimary xs:text-left w-full">
              Quick Links
            </h1>

            <ul className="w-full mt-3">
              {Menus.filter((menu) => menu.nav_Title !== "Our Products").map(
                (menu, i) => (
                  <li
                    key={i}
                    className="py-1.5 font-Lato text-Paragraph8 text-left w-full"
                  >
                    <Link to={menu.nav_Url}>
                      <span>{menu.nav_Title}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* divider */}
          <div className="w-[1.5px] h-full bg-textGray absolute top-0 sm:right-5 hidden sm:inline"></div>
        </div>

        {/* Product Range */}
        <div className="flex flex-col items-center-safe relative">
          <div className="flex flex-col items-center-safe w-full sm:w-40">
            <h1 className="font-Poppins font-bold text-Paragraph6 text-btnPrimary xs:text-left w-full">
              Product Ranges
            </h1>

            <ul className="w-full mt-3">
              {(isXlScreen ? categories.slice(0, 4) : categories).map((cat) => (
                <li
                  key={cat.id}
                  className="py-1.5 font-Lato text-Paragraph8 text-left w-full"
                >
                  {/* <Link to={menu.nav_Url}> */}
                  <span>{cat.name}</span>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>
          {/* divider */}
          <div className="w-[1.5px] h-full bg-textGray absolute top-0 sm:right-0 hidden xl:inline"></div>
        </div>

        {/* Product Range 2 */}
        <div className="xl:inline-flex flex-col items-center-safe justify-center hidden">
          <div className="flex flex-col justify-center-safe items-center-safe w-full sm:w-40">
            <ul className="w-full mt-3">
              {categories.slice(4).map((cat) => (
                <li
                  key={cat.id}
                  className="py-1.5 font-Lato text-Paragraph8 text-left w-full"
                >
                  {/* <Link to={menu.nav_Url}> */}
                  <span>{cat.name}</span>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center-safe  sm:w-[88vw] sm:mx-auto lg:w-full lg:px-2">
          <h1 className="text-Paragraph7 text-textPrimary font-AbrilFatface tracking-[0.50px] w-fit lg:w-full text-center">
            Flavour Just a Message Away!
          </h1>

          <button
            onClick={() => window.open("https://wa.me/+923369917755")}
            className="flex justify-center items-center gap-2 mt-5 text-Paragraph6 text-textWhite font-bold font-Inter w-full
                                bg-btnPrimary px-9 py-1.5 rounded-xl border-0 cursor-pointer transition-all duration-300
                                focus:ring-2 focus:ring-btnPrimary focus:outline-none hover:to-btnPrimaryHover xs:w-[200px]"
          >
            <FaWhatsapp />
            <p>WhatsApp</p>
          </button>

        <Link to="">
          <div className="flex justify-center-safe items-center-safe gap-2 mt-5 font-Lato w-fit">
                <MdEmail className="text-Paragraph3" />
                <p className="text-Paragraph7">info@kks.com</p>
          </div>
        </Link>
        </div>
      </section>
      <section
        className="p-5 xs:w-[95vw] xl:w-7xl border-0 border-t border-textGray"
      >
        <p className="text-center text-Paragraph8 text-btnPrimary font-Lato font-normal tracking-[0.50px]">Website Powered by Codenthic.</p>
      </section>
    </footer>
  );
};

export default Footer;
