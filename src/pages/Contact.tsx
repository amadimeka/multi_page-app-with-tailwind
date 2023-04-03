import React from "react";
import Header from "../componenents/Header";
import contact_bg from "../images/svg/contact_bg.svg";
import logo from "../images/svg/logo.svg";
import facebook from "../images/svg/facebook.svg";
import youtube from "../images/svg/Shape.svg";
import twitter from "../images/svg/twitter_logo.svg";
import pinterest from "../images/svg/pinterest.svg";
import canada from "../images/svg/canada.svg";
import united_kingdom from "../images/svg/united_kingdom.svg";
import australia from "../images/svg/australia.svg";
import instagram from "../images/svg/instagram.svg";
import rectangle from "../images/svg/Rectangle_bg_gradient.svg";

const Countries = [
  {
    img: canada,
    title: "CANADA",
    buttonText:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: australia,
    title: "AUSTRALIA",
    buttonText:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: united_kingdom,
    title: "UNITED KINGDOM",
    buttonText:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const Contact = () => {
  return (
    <div className=" ">
      <img
        src={rectangle}
        alt="gradient"
        className="absolute right-0 top-[885px] h-[594px] -z-40"
      />
      <Header />
      <div className=" w-full px-[165px] mb-[160px]">
        <div
          className=" w-full h-[480px]  rounded-lg  bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${contact_bg})` }}
        >
          <div className="flex flex-col w-[540px] h-[350px] ml-[95px] pt-[145px] text-white items-start">
            <p className="text-white font-medium leading-10 text-[48px] font-['Jost'] ">
              Contact Us
            </p>
            <p className="text-white font-normal mt-[11px] leading-7 text-[16px] font-['Jost'] ">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>

            <button className="mt-[40px] w-[152px] h-[56px] bg-white text-black rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex mt-[160px] w-full space-x-[30px] mb-[160px] justify-center">
          {Countries.map((value) => (
            <div className="flex flex-col leading-[26px] text-[#333136] w-[350px] h-[364px] items-center">
              <img
                src={value.img}
                alt="quality-logo"
                className="w-[202px] h-[202px]"
              />
              <p className="tracking-[5px] mt-[48px] text-medium  font-['Jost'] text-[20px]">
                {value.title}
              </p>
              <button className="rounded-lg color-white w-[152px] h-[52px] bg-main mt-[32px] ">
                {" "}
                See Location
              </button>
            </div>
          ))}
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

export default Contact;
