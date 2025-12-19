import React from "react";
import { TailSpin } from "react-loader-spinner";
import Logo from "../assets/Logo/Logo2.png";
// import Banner from "../assets/Home/ProductBanner.png";
import "../index.css"

const AppLoader = () => {
    return (
        <div 
            // style={{ backgroundImage: `url(${Banner})` }}
            className="fixed inset-0 bg-Primarybg flex flex-col justify-center items-center z-50">

            {/* Loader */}
            <div className="relative flex flex-col items-center-safe ">
                <TailSpin
                    visible={true}
                    height="150"
                    width="150"
                    color="#E6421A"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />

                {/* Logo */}
                <img
                    src={Logo}
                    alt="logo"
                    className="w-28 animate-pulse absolute top-11"
                />
            </div>

            {/* Animated Typing Text */}
            <h1 className="mt-10 text-btnPrimary text-2xl font-Montserrat font-bold tracking-wide typing-text">
                Loading...
            </h1>
        </div>
    );
};

export default AppLoader;
