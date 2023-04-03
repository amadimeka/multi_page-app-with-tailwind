import React from "react";
import location_bg from "../images/svg/location_bg.svg";
import canada from "../images/image/canada_map.jpg";
import australia from "../images/image/australia_map.jpg";
import UK_map from "../images/image/UK_map.jpg";

const Location = () => {
  return (
    <div className="mb-[380px] px-[165px]">
      <div className="grid grid-cols-3 gap-8 ">
        <div
          className="col-span-2 h-[326px] rounded-lg px-[95px] py-[88px]"
          style={{ backgroundImage: `url(${location_bg})` }}
        >
          <div>
            <p className="text-main text-medium text-[40px] eading-[48px]">
              Canada
            </p>
            <div className="flex ">
              <div className="font-[jost] text-[16px] leading-[26px] w-[225px] ">
                <p className="font-bold">Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="font-[jost] text-[16px] leading-[26px] w-[225px] pl-[30px]">
                <p className="font-bold">Contact</p>
                <p>P : +1 253-863-8967 </p>
                <p>M : contact@designo.co</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[326px] rounded-lg">
          <img className="h-full w-full" src={canada} alt="map" />
        </div>
        <div className="h-[326px] rounded-lg">
          <img className="h-full w-full" src={australia} alt="map" />
        </div>
        <div
          className="col-span-2 h-[326px] rounded-lg px-[95px] py-[88px]"
          style={{ backgroundImage: `url(${location_bg})` }}
        >
          <div>
            <p className="text-main text-medium text-[40px] leading-[48px]">
              Australia
            </p>
            <div className="flex ">
              <div className="font-[jost] text-[16px] leading-[26px] w-[225px] ">
                <p className="font-bold">Designo AU Office </p>
                <p>9 Balonne Street</p>
                <p>New South Wales 2443</p>
              </div>
              <div className="font-[jost] text-[16px] leading-[26px] w-[225px] pl-[30px]">
                <p className="font-bold">Contact</p>
                <p>P : (02) 6720 9092 </p>
                <p>M : contact@designo.au</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-2 h-[326px] rounded-lg px-[95px] py-[88px]"
          style={{ backgroundImage: `url(${location_bg})` }}
        >
          <div>
            <p className="text-main text-medium text-[40px] eading-[48px]">
              United Kingdom
            </p>
            <div className="flex ">
              <div className="font-[jost] text-[16px] leading-[26px] w-[225px] ">
                <p className="font-bold">Designo UK Office</p>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div className="font-[jost] text-[16px] leading-[26px] w-[225px] pl-[30px]">
                <p className="font-bold">Contact</p>
                <p>P : 078 3115 1400 </p>
                <p>M : contact@designo.uk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[326px] rounded-lg">
          <img src={UK_map} className="h-full w-full"  alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Location;
