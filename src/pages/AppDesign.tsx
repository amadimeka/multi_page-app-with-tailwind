import React from "react";
import BodyComponent from "../componenents/DesignBody/BodyComponent";
import app_bgh from "../images/svg/app_bgh.svg";
import app1 from "../images/image/app1.jpg";
import app2 from "../images/image/app2.jpg";
import app3 from "../images/image/app3.jpg";
import app4 from "../images/image/app4.jpg";
import app5 from "../images/image/app5.jpg";

const property = {
  webImage: [app1, app2, app3, app4, app5],
  title: "App Design",
  body: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
  bg: app_bgh,
};


const AppDesign = () => {
  return (
    <div className="mb-[220px] px-[165px]">
      <BodyComponent
        webImage={property.webImage}
        title={property.title}
        body={property.body}
        bgImage={property.bg}
      />
    </div>
  );
};

export default AppDesign;
