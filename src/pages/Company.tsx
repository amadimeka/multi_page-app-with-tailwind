import oval_gradient from '../images/svg/oval_bg_gradient.svg';
import web_design from '../images/image/web_design_bgh.jpg';
import graphic_design from '../images/image/graphic_design1.png';
import app_design from '../images/image/app_design_bgh.jpg';
import phone from '../images/image/phoneframe1.png';
import rectangle from '../images/svg/Rectangle_bg_gradient.svg';
import friendly from '../images/svg/friendly.svg';
import passionate from '../images/svg/passionate.svg';
import resourceful from '../images/svg/resources.svg';

const Qualities = [
  {
    img: passionate,
    title: 'PASSIONATE',
    body: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
  },
  {
    img: resourceful,
    title: 'RESOURCEFUL',
    body: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
  },
  {
    img: friendly,
    title: 'FRIENDLY',
    body: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
  },
];

const Company = () => {
  return (
    <div className=" static w-full flex flex-col items-center px-[164px]">
      <img
        src={rectangle}
        alt="gradient"
        className="absolute left-0 top-[320px] h-[594px] -z-40"
      />
      <img
        src={rectangle}
        alt="gradient"
        className="absolute right-0 top-[1791px] h-[594px] -z-40"
      />
      <div className="relative w-full h-[640px] bg-main rounded-lg">
        <img
          src={oval_gradient}
          alt="gradient"
          className="absolute right-0"
        />
        <img
          src={phone}
          alt="phone"
          className="absolute right-0 bottom-0"
        />
        <div className="flex flex-col w-[540px] h-[350px] ml-[95px] mt-[145px] text-white items-start">
          <p className="text-white font-medium leading-10 text-[48px] font-['Jost'] ">
            Award-winning custom designs and
            digital branding solutions
          </p>
          <p className="text-white font-normal mt-[11px] leading-7 text-[16px] font-['Jost'] ">
            With over 10 years in the industry, we
            are experienced in creating fully
            responsive websites, app design, and
            engaging brand experiences. Find out
            more about our services.
          </p>

          <button className="mt-[40px] w-[152px] h-[56px] bg-white text-black rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full mt-[160px] text-white  h-[640px]  rounded-lg mb-10 grid grid-rows-2 grid-flow-col gap-[30px]">
        <div
          className="row-span-2 hover:opacity-25  h-full bg-no-repeat bg-cover w-full rounded-lg "
          style={{
            backgroundImage: `url(${web_design})`,
          }}>
          <a
            href="/web_design"
            className="w-full h-full flex flex-col justify-center items-center">
            <p className="font-medium  leading-7 text-[40px] font-['Jost'] ">
              Web Design
            </p>
            <p className="font-normal mt-[24px] tracking-[5px] leading-7 text-[16px] font-['Jost'] ">
              View project
            </p>
          </a>
        </div>
        <div
          className="col-span-1 row-span-1 hover:opacity-25 h-full bg-no-repeat bg-cover w-full rounded-lg "
          style={{
            backgroundImage: `url(${app_design})`,
          }}>
          <a
            href="/app_design"
            className="w-full h-full flex flex-col justify-center items-center">
            <p className="font-medium  leading-7 text-[40px] font-['Jost'] ">
              App Design
            </p>
            <p className="font-normal mt-[24px] tracking-[5px] leading-7 text-[16px] font-['Jost']">
              View project
            </p>
          </a>
        </div>
        <div
          className="row-span-1 col-span-1 hover:opacity-25 mix-blend-multiply h-full bg-no-repeat bg-cover w-full rounded-lg "
          style={{
            backgroundImage: `url(${graphic_design})`,
          }}>
          <a
            href="/graphic_design"
            className="w-full h-full flex flex-col justify-center items-center">
            <p className="font-medium  leading-7 text-[40px] font-['Jost'] ">
              Graphic Design
            </p>
            <p className="font-normal mt-[24px] tracking-[5px] leading-7 text-[16px] font-['Jost']">
              View project
            </p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[30px] mt-[160px] mb-[380px]">
        {Qualities.map((value) => (
          <div className="flex flex-col leading-[26px] text-[#333136] h-[412px] items-center">
            <img
              src={value.img}
              alt="quality-logo"
              className="w-[202px] h-[202px]"
            />
            <p className="tracking-[5px] mt-[48px] text-medium  font-['Jost'] text-[20px]">
              {value.title}
            </p>
            <p className="text-center mt-[32px]  text-[16px]">
              {value.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
