import img from "../image/spoko4.jpg";
import React from "react";

export const HeaderImage = ({ title, subTitle }) => {
  return (
    <section>
      <div data-cy='spoko-logo'
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ minHeight: "180px" }}>
          <div className="text-center justify-content-center align-self-center">
            <h1 className="pt-5 pb-3">{title}</h1>
            <h5>{subTitle}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderImage;
