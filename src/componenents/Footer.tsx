import React from "react";
import logo from "../images/svg/logo.svg";
import facebook from "../images/svg/facebook.svg";
import youtube from "../images/svg/Shape.svg";
import twitter from "../images/svg/twitter_logo.svg";
import pinterest from "../images/svg/pinterest.svg";
import instagram from "../images/svg/instagram.svg";
import gic_bg from "../images/svg/gic_bg.svg";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full">
        <div
          className="w-[77%] flex flex-row h-[292px] justify-between items-center px-[95px] absolute left-[165px] -bottom-[72px] bg-no-repeat bg-cover bg-main rounded-lg"
          style={{ backgroundImage: `url(${gic_bg})` }}
        >
          <div className="w-[459px] h-[174px] text-white">
            <p className="text-[40px]  text-medium font-jost leading-[40px] text-left mb-[30px]">
              Let’s talk about your project
            </p>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="w-[152px] h-[56px] bg-white rounded-lg ">
            Get in touch
          </button>
        </div>
      </div>
      <div className="bg-black text-white pt-[144px] h-[393px] px-[165px]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src={logo} alt="logo" className="hidden h-8 w-auto lg:block" />{" "}
            <p className="font-spartans text-2xl tracking-[5px] ml-[16px]">
              DESIGNO
            </p>
          </div>
          <div className="flex space-x-14 text-xl font-[Jost] tracking-[2px] leading-[14px] text-[14px] ">
            <a href="/">OUR COMPANY</a>
            <a href="/location">LOCATION</a>
            <a href="/contact">CONTACT</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white opacity-10 mt-[40px] "></div>
        <div className="mt-[31px] flex justify-between font-['Jost'] text-white 	text-[16px]">
          <div className="flex flex-col opacity-50">
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="flex flex-col opacity-50">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967 </p>
            <p>M : contact@designo.com</p>
          </div>
          <div className="flex flex-row items-end space-x-4">
            <img src={facebook} alt="facebook" className="lg:block" />
            <img src={youtube} alt="youtube" className="lg:block " />
            <img src={twitter} alt="twitter" className="lg:block" />
            <img src={pinterest} alt="pinterest" className="lg:block" />
            <img src={instagram} alt="instagram" className="lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
