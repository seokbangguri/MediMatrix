import imagetest1 from "../../assets/test1.svg";
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
      <div className="w-full lg:max-w-[1445px] flex flex-col md:flex-row  justify-between items-center gap-10 pb-10 pt-32 px-5 lg:px-10">
        <div className="flex flex-col justify-between h-full">
          <a href="/">
            <img
              className="pt-1"
              src={imagetest1}
              width={220}
              height={60}
              alt="logo"
            />
          </a>

          <Text size="s" styles="text-white">&copy; 2023 MediMatrix | Security | Privacy | Terms</Text>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-5">
            <NavLinks address={'/'} text='Home' />
            <NavLinks address={'#products'} text='Products' />
            <NavLinks address={'#'} text='About Us' />
            <NavLinks address={'#'} text='News' />
            <NavLinks address={'#contact'} text='Contact' />
          </div>
          <div className="flex flex-col text-white gap-2 md:gap-4 lg:gap-5">
            <NavLinks address={'#'} text='Customers' />
            <NavLinks address={'#'} text='Services' />
            <NavLinks address={'#'} text='Media' />
            <NavLinks address={'#partners'} text='Partners' />
          </div>
        </div>
        <div className="flex flex-col justify-center text-white gap-2 md:gap-4 lg:gap-5">
          <MediaLinks address={'#'} text='Youtube' iconImage={youtube} />
          <MediaLinks address={'#'} text='Facebook' iconImage={facebook} />
          <MediaLinks address={'#'} text='Twitter' iconImage={twitter} />
          <MediaLinks address={'#'} text='Instagram' iconImage={instagram} />
        </div>

      </div>
    </footer>
  );
};

export default Footer;

export const NavLinks = ({ address, text }: { address: String, text: String }) => (
  <a
    href={`${address}`}
    className="text-md font-semibold tracking-wider hover:opacity-75 hover:scale-105 duration-150"
  >
    {text}
  </a>
)

export const MediaLinks = ({ address, text, iconImage }: { address: string, text: string, iconImage: string }) => (
  <a
    href={`${address}`}
    className="text-md font-semibold  tracking-wider hover:opacity-70 flex items-center"
  >
    <img
      className="pt-1 mr-4"
      src={iconImage}
      width={40}

      alt="social media link"
    />{text}
  </a>
)