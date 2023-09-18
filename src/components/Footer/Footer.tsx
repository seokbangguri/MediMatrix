import React from "react";
import image from "../../assets/medimatrix_logo_white.svg";
const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-50 w-screen lg:max-w-[1445px] flex items-center justify-between pb-10 pt-20 px-5 lg:px-10 bg-button-green">
      <div className="flex items-center justify-center ">
        <a href="/">
          <img
            className="pt-1"
            src={image}
            width={190}
            height={60}
            alt="logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
