import img from "../image/spoko3.jpg";
import React from "react";

export const Header_image = ({ title, subTitle }) => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ minHeight: "250px" }}>
          <div className="text-center justify-content-center align-self-center">
            <h1 className="pt-5 pb-3">{title}</h1>
            <h5>{subTitle}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header_image;
