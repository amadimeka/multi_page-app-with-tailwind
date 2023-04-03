import React from "react";
import web_bgh from "../images/svg/web-bgh.svg";
import web1 from "../images/image/web1.jpg";
import web2 from "../images/image/web2.jpg";
import web3 from "../images/image/web3.png";
import web4 from "../images/image/web4.jpg";
import web5 from "../images/image/web5.jpg";
import web6 from "../images/image/web6.jpg";
import BodyComponent from "../componenents/DesignBody/BodyComponent";
const property = {
  webImage: [web1, web2, web3, web4, web5, web6],
  title: "Web Design",
  body: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  bg: web_bgh,
};

const WebDesign = () => {
  return (
    <div className="mb-[220px] px-[165px]">
      <BodyComponent
        webImage={property.webImage}
        bgImage={property.bg}
        title={property.title}
        body={property.body}
      />
    </div>
  );
};

export default WebDesign;
