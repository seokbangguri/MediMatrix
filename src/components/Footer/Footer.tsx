import React from "react";
import image from "../../assets/medimatrix_logo_white.svg";
import footerImage from "../../assets/footer-blob.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import Text from "../Text/Text";


const Footer = () => {
  const backgroundStyle = {
    backgroundImage: `url(${footerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // You can adjust this based on your needs
    // Other CSS properties for the container
    backgroundPosition: 'top',
    width: '100%',
    height: '',
  };
  return (
    <footer style={backgroundStyle} className="w-screen flex flex-col md:flex-row  justify-center">
      <div className="w-full lg:max-w-[1445px] flex flex-col md:flex-row  justify-between pb-10 pt-32 px-5 lg:px-10">
      <div className="flex flex-col justify-between">
        <a href="/">
          <img
            className="pt-1"
            src={image}
            width={220}
            height={60}
            alt="logo"
          />
        </a>

        <Text size="s" styles="text-white">@ 2023 MetaMatrix | Security | Privacy | Terms</Text>
      </div>
      <div className="flex gap-16">
      <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-6">
          <a
            href="/"
            className="text-md font-semibold  tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            Home
          </a>
          <a
            href="/"
            className="text-md font-semibold  tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            Producs
          </a>
          <a
            href="/"
            className="text-md font-semibold  tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            About Us
          </a>
          <a
            href="/"
            className="text-md font-semibold tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            News
          </a>
          <a
            href="/"
            className="text-md font-semibold tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-6">
          <a
            href="/"
            className="text-md font-semibold  tracking-wider hover:opacity-75  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            Customer
          </a>
          <a
            href="/"
            className="text-md font-semibold  tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            Services
          </a>
          <a
            href="/"
            className="text-md font-semibold  tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            Media
          </a>
          <a
            href="/"
            className="text-md font-semibold tracking-wider hover:opacity-70  border-transparent border-b-[2px] hover:border-button-green hover:scale-105 duration-150"
          >
            Partners
          </a>
        </div>
      </div>
        <div className="flex flex-col justify-center text-white gap-2 md:gap-4 lg:gap-6">
          <a
            href="/"
            className="text-md font-semibold  tracking-wider hover:opacity-75 flex items-center"
          ><img
          className="pt-1 mr-4"
          src={youtube}
          width={40}
          
          alt="logo"
        />
            YouTube
          </a>
          <a
          href="/"
          className="text-md font-semibold  tracking-wider hover:opacity-70 flex items-center"
        >
          <img
            className="pt-1 mr-4"
            src={facebook}
            width={40}
            
            alt="logo"
          />Facebook
        </a>
          <a
          href="/"
          className="text-md font-semibold tracking-wider hover:opacity-70 flex items-center"
        ><img
        className="pt-1 mr-4"
        src={twitter}
        width={40}
        
        alt="logo"
      />
          Twitter
        </a>
          <a
          href="/"
          className="text-md font-semibold  tracking-wider hover:opacity-70 flex items-center"
        >
          <img
            className="pt-1 mr-4"
            src={instagram}
            width={40}
            
            alt="logo"
          />Instagram
        </a>
          
          
          
          
          
        </div>

        </div>
    </footer>
  );
};

export default Footer;
