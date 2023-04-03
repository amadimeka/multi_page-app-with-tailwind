import React from "react";
import BodyComponent from "../componenents/DesignBody/BodyComponent";
import graphic1 from "../images/image/graphic1.jpg";
import graphic2 from "../images/image/graphic2.jpg";
import graphic3 from "../images/image/graphic3.jpg";
import graphic_design_bgh from "../images/svg/graphic_bgh.svg";

const graph = {
  webImage: [graphic1, graphic2, graphic3],
  title: "Graphic Design",
  body: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
  bg: graphic_design_bgh,
};

const GraphicDesign = () => {
  return (
    <div className="mb-[220px] px-[165px]">
      <BodyComponent
        webImage={graph.webImage}
        title={graph.title}
        body={graph.body}
        bgImage={graph.bg}
      />
    </div>
  );
};

export default GraphicDesign;
