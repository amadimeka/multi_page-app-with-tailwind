/* eslint-disable react/jsx-no-comment-textnodes */
import logo from "../images/svg/logo.svg";

const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between py-10 px-[165px]">
        <img src={logo} alt="logo" className="hidden h-8 w-auto lg:block" />
        <div className="flex space-x-14 text-xl">
          <a href="/">Our Company</a>
          <a href="/location">Location</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
