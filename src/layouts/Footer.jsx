import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/Logo/Logo2.png";
import Facebook from "../assets/Home/facebook.png";
import Insta from "../assets/Home/insta.png";
import Tiktok from "../assets/Home/tiktok.png";
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
      icon: Facebook,
      name: "Facebook",
      url: "",
    },
    {
      icon: Insta,
      name: "Instagram",
      url: "",
    },
    {
      icon: Tiktok,
      name: "Tik Tok",
      url: "",
    },
  ];
  return (
    <footer className="bg-FooterBg flex flex-col items-center-safe">
      <section
        className="px-5 grid gap-5 py-16 md:py-24 
                    xs:w-[95vw] 
                    sm:grid-cols-3
                    xl:w-[1280px] xl:grid-cols-5"
      >
        {/* Logo & Socail Icons */}
        <div className="">
          <img src={Logo} alt="Logo" className="w-[160px]" />
          <div className="grid grid-cols-3 p-5 gap-4 xs:w-fit ">
            {SocialIcons.map((socail, index) => (
              <div key={index} className="">
                <Link to={socail.url}>
                  <img
                    src={socail.icon}
                    alt={socail.name}
                    className="w-8 h-7"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center-safe">
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
        </div>

        {/* Product Range */}
        <div className="flex flex-col items-center-safe border-0 sm:border-l xl:border-r border-textGray">
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
        <div className="flex flex-col xl:items-center-safe">
          <h1 className="text-Paragraph6 text-textPrimary font-AbrilFatface xs:text-left w-full tracking-[0.50px]">
            Flavour Just a Mesaage Away!
          </h1>

          <button
            className="flex items-center gap-2 mt-5 text-Paragraph6 text-textWhite font-bold font-Inter w-fit
                                bg-btnPrimary px-9 py-1.5 rounded-xl border-0 cursor-pointer transition-all duration-300
                                focus:ring-2 focus:ring-btnPrimary focus:outline-none hover:to-btnPrimaryHover"
          >
            <FaWhatsapp />
            <p>WhatsApp</p>
          </button>

        <Link to="">
          <div className="flex justify-center-safe items-center-safe gap-2 mt-5 font-Lato w-fit">
                <MdEmail className="text-Paragraph3" />
                <p className="text-Paragraph7">info@kk.com</p>
          </div>
        </Link>
        </div>
      </section>
      <section
        className="p-5 xs:w-[95vw] xl:w-[1280px] border-0 border-t border-textGray"
      >
        <p className="text-center text-Paragraph8 text-btnPrimary font-Lato font-normal tracking-[0.50px]">Website Powered by Codenthic.</p>
      </section>
    </footer>
  );
};

export default Footer;
