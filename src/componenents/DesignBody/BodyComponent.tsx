import graphic_design from "../../images/image/graphic_design1.png";
import app_design from "../../images/image/app_design_bgh.jpg";
import web_design from "../../images/image/web_design_bgh.jpg";

interface Props {
  webImage: string[];
  bgImage: string;
  title: string;
  body: string;
}

const BodyComponent = ({ webImage, bgImage, body, title }: Props) => {
  const design = [
    {
      type: "Web Design",
      bg: web_design,
      linker: "/web_design",
    },
    { type: "Graphic Design", bg: graphic_design, linker: "/graphic_design" },
    { type: "App Design", bg: app_design, linker: "/app_design" },
  ];
  return (
    <div className="pb-[160px]">
      <div
        className="w-full h-[252px] rounded-lg bg-no-repeat bg-cover flex flex-col text-white font-[jost] items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <p className="text-[48px] font-medium leading-[48px]">{title}</p>
        <p className="text-[16px] w-[730px] mt-[24px] text-center leading-[26px]">
          {body}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-[139px] mb-[181px] ">
        {webImage?.map((image: any) => (
          <div className="h-[478px] rounded-lg ">
            <img src={image} className="h-full w-full" alt="webImage" />
          </div>
        ))}
      </div>
      <div className="w-full mt-[160px] text-white  h-[308px]  rounded-lg mb-[160px] grid grid-rows-2 grid-flow-col gap-[30px]">
        {design
          .filter((value) => value.type !== title)
          .map((val) => (
            <div
              className="row-span-2 hover:opacity-25  h-full bg-no-repeat bg-cover w-full rounded-lg "
              style={{ backgroundImage: `url(${val.bg})` }}
            >
              <a
                href={val.linker}
                className="w-full h-full flex flex-col justify-center items-center"
              >
                <p className="font-medium  leading-7 text-[40px] font-['Jost'] ">
                  {val.type}
                </p>
                <p className="font-normal mt-[24px] tracking-[5px] leading-7 text-[16px] font-['Jost'] ">
                  View project
                </p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
export default BodyComponent;
