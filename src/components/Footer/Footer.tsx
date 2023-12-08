import imagetest1 from "../../assets/test1.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import Text from "../Text/Text";
import { Link } from "react-router-dom";
import { footerBackgroundStyle } from "../../styles/generalStyles";


const Footer = () => {

  return (
    <footer style={footerBackgroundStyle} className="w-screen flex flex-col md:flex-row  justify-center bg-gradient-green pt-20">
      <div className="w-full container flex flex-col md:flex-row  justify-between items-center gap-14 pb-10 mt-20 md:pt-14 px-5 lg:px-10">
        <div className="flex flex-col items-center md:items-start justify-between gap-4 h-full">
          <Link to="/">
            <img
              className="pt-1"
              src={imagetest1}
              width={220}
              height={60}
              alt="logo"
            />
          </Link>

          <Link to='privacy'>
            <Text size="s" styles="text-white">&copy; 2023 GoQba Medical | Security | Privacy | Terms</Text>
          </Link>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-5">
            <NavLinks address={'/'} text='Home' />
            <NavLinks address={'#products'} text='Products' />
            <NavLinks address={'/aboutus'} text='About Us' />
            <NavLinks address={'/news'} text='News' />
            <NavLinks address={'#contact'} text='Contact' />
          </div>
          <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-5">
            <NavLinks address={'/customer'} text='Customers' />
            <NavLinks address={'/services'} text='Services' />
            <NavLinks address={'/media'} text='Media' />
            <NavLinks address={'#partners'} text='Partners' />
          </div>
        </div>
        <div className="flex flex-col justify-center text-white gap-2 md:gap-4 lg:gap-5">
          <MediaLinks address={'youtube'} text='Youtube' iconImage={youtube} />
          <MediaLinks address={'/facebook'} text='Facebook' iconImage={facebook} />
          <MediaLinks address={'/twitter'} text='Twitter' iconImage={twitter} />
          <MediaLinks address={'/instagram'} text='Instagram' iconImage={instagram} />
        </div>

      </div>
    </footer>
  );
};

export default Footer;

export const NavLinks = ({ address, text }: { address: String, text: String }) => (
  <Link to={`${address}`} reloadDocument
    className="text-md font-semibold tracking-wider hover:opacity-75 hover:scale-105 duration-150"
  >
    {text}
  </Link>
)

export const MediaLinks = ({ address, text, iconImage }: { address: string, text: string, iconImage: string }) => (
  <a
    href={`${address}`}
    className="text-md font-semibold  tracking-wider hover:opacity-70 flex items-center"
  >
    <img
      className="pt-1 mr-4 block"
      src={iconImage}
      width={30}

      alt="social media link"
    />{text}
  </a>
)