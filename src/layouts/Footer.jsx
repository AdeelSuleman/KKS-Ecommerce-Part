import React, { useState, useEffect, useMemo } from "react";
import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/Logo/Logo2.png";
import { Link } from "react-router-dom";
import { Menus } from "./MenuData";
import { categories } from "../data/products";

const SocialIcons = [
  {
    icon: <FaFacebook />,
    name: "Facebook",
    url: "https://www.facebook.com/share/1C6QNoDXFv/",
  },
  {
    icon: <RiInstagramFill />,
    name: "Instagram",
    url: "https://www.instagram.com/kks_foods?igsh=dmpkenpzbHpxMnZw",
  },
  {
    icon: <FaTiktok />,
    name: "Tik Tok",
    url:
      "https://www.tiktok.com/@kks.foods?_t=ZS-90QvFpMEhIl&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGn8fxZI_0-s-6diQKl_CEz-gXqrLDmX8u_ShyTOv63dHvnypyhqDwLsnkpWSA_aem_mcoWqQs6Cqhqx9sphpoQ7g",
  },
];

const Footer = () => {
  const [isXlScreen, setIsXlScreen] = useState(
    window.matchMedia("(min-width:1280px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1280px)");

    const handleChange = (e) => setIsXlScreen(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const visibleCategories = useMemo(
    () => (isXlScreen ? categories.slice(0, 4) : categories),
    [isXlScreen]
  );

  return (
    <footer className="bg-FooterBg flex flex-col items-center-safe">
      <section
        className="px-5 grid gap-5
        xs:w-[80vw] xs:pt-12 xs:pb-10
        sm:grid-cols-3 sm:w-[95vw] 
        lg:grid-cols-4 lg:pt-14 lg:pb-12
        xl:w-7xl xl:grid-cols-5 xl:py-20"
      >
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-center-safe md:items-start">

        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="xs:w-[200px] lg:w-[180px] xl:w-[230px]"
          />
          </Link>

          <div className="grid grid-cols-3 p-3 gap-5 xs:w-fit xl:mx-auto">
            {SocialIcons.map((s, index) => (
              <a
                key={index}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-Heading5 xl:text-Heading4"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center-safe relative">
          <div className="flex flex-col items-center-safe w-full sm:w-40">
            <h1 className="font-Poppins font-bold text-Paragraph5 text-btnPrimary xs:text-left w-full">
              Quick Links
            </h1>

            <ul className="w-full mt-3">
              {Menus.filter((m) => m.nav_Title !== "Our Products").map(
                (menu, i) => (
                  <li
                    key={i}
                    className="py-1.5 font-Lato text-Paragraph6 text-left w-full"
                  >
                    <Link to={menu.nav_Url}>
                      <span>{menu.nav_Title}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="w-[1.5px] h-full bg-textGray absolute top-0 sm:right-5 hidden sm:inline"></div>
        </div>

        {/* Product Range */}
        <div className="flex flex-col items-center-safe relative">
          <div className="flex flex-col items-center-safe w-full sm:w-40">
            <h1 className="font-Poppins font-bold text-Paragraph5 text-btnPrimary xs:text-left w-full">
              Product Ranges
            </h1>

            <ul className="w-full mt-3">
              {visibleCategories.map((cat) => (
                <li
                  key={cat.id}
                  className="py-1.5 font-Lato text-Paragraph6 text-left w-full"
                >
                  <Link to={`/shop?category=${encodeURIComponent(cat.name)}`}>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[1.5px] h-full bg-textGray absolute top-0 sm:right-0 hidden xl:inline"></div>
        </div>

        {/* Product Range 2 */}
        <div className="xl:inline-flex flex-col items-center-safe justify-center hidden">
          <div className="flex flex-col justify-center-safe items-center-safe w-full sm:w-40">
            <ul className="w-full mt-3">
              {categories.slice(4).map((cat) => (
                <li
                  key={cat.id}
                  className="py-1.5 font-Lato text-Paragraph6 text-left w-full"
                >
                  <Link to={`/shop?category=${encodeURIComponent(cat.name)}`}>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center-safe sm:w-[88vw] sm:mx-auto lg:w-full lg:px-2">
          <h1 className="text-Paragraph7 font-bold text-textPrimary font-AbrilFatface tracking-[0.50px] text-center">
            Flavour Just a Message Away!
          </h1>

          <button
            onClick={() => window.open("https://wa.me/+923369917755")}
            className="flex justify-center items-center gap-2 mt-5 text-Paragraph6 text-textWhite font-bold font-Inter w-full
              bg-btnPrimary px-9 py-1.5 rounded-xl transition-all duration-300
              focus:ring-2 focus:ring-btnPrimary hover:to-btnPrimaryHover xs:w-[200px]"
          >
            <FaWhatsapp />
            <p>WhatsApp</p>
          </button>

          <a href="mailto:info@kks.com">
            <div className="flex justify-center-safe items-center-safe gap-2 mt-5 font-Lato w-fit">
              <MdEmail className="text-Paragraph3" />
              <p className="text-Paragraph7">info@kks.com</p>
            </div>
          </a>
        </div>
      </section>

      <section className="p-5 xs:w-[95vw] xl:w-7xl border-0 border-t border-textGray">
        <p className="text-center text-Paragraph8 text-btnPrimary font-Lato">
          Website Powered by Codenthic.
        </p>
      </section>
    </footer>
  );
};

export default React.memo(Footer);