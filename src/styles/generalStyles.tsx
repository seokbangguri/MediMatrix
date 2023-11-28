import blobImage from "../assets/home-blob.svg"
import signinBg from '../assets/signin-blob.svg'
import mapimage from "../assets/map.png"
import footerImage from "../assets/footer-blob.svg";

export const firstBlobStyle = {
    backgroundImage: `url(${blobImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "40%",
    width: '100%',
    height: '100%',
}

export const secondBlobStyle = {
    backgroundImage: `url(${blobImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: '700px',
    height: '800px',
    transform: 'rotate(30deg)',
}

export const thirdBlobStyle = {
    backgroundImage: `url(${blobImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: '700px',
    height: '800px',
}

export const signupBgStyle = {
    backgroundImage: `url(${signinBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    backgroundPosition: '0 500px',
    width: '100%',
    height: '100vh',
};

export const contactBg = {
    backgroundImage: `url(${mapimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
}

export const footerBackgroundStyle = {
    backgroundImage: `url(${footerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // You can adjust this based on your needs
    // Other CSS properties for the container
    backgroundPosition: 'top',
    width: '100%',
    height: '',
};