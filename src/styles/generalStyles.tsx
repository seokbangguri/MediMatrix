import blobImage from "../assets/home-blob.svg"
import signinBg from '../assets/signin-blob.svg'
import mapimage from "../assets/map.png"

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
    backgroundSize: '100% 40%',
    backgroundPosition: '0 bottom',
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
    clipPath: 'polygon(100% 100%, 0% 100% , 0.00% 29.18%, 2.00% 29.08%, 4.00% 28.80%, 6.00% 28.33%, 8.00% 27.72%, 10.00% 26.97%, 12.00% 26.13%, 14.00% 25.24%, 16.00% 24.33%, 18.00% 23.45%, 20.00% 22.63%, 22.00% 21.92%, 24.00% 21.35%, 26.00% 20.94%, 28.00% 20.70%, 30.00% 20.66%, 32.00% 20.82%, 34.00% 21.16%, 36.00% 21.67%, 38.00% 22.33%, 40.00% 23.10%, 42.00% 23.96%, 44.00% 24.86%, 46.00% 25.77%, 48.00% 26.64%, 50.00% 27.42%, 52.00% 28.10%, 54.00% 28.63%, 56.00% 28.99%, 58.00% 29.16%, 60.00% 29.15%, 62.00% 28.94%, 64.00% 28.55%, 66.00% 27.99%, 68.00% 27.29%, 70.00% 26.49%, 72.00% 25.61%, 74.00% 24.70%, 76.00% 23.81%, 78.00% 22.96%, 80.00% 22.20%, 82.00% 21.57%, 84.00% 21.08%, 86.00% 20.78%, 88.00% 20.66%, 90.00% 20.73%, 92.00% 21.00%, 94.00% 21.44%, 96.00% 22.04%, 98.00% 22.77%, 100.00% 23.60%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // You can adjust this based on your needs
    width: '100%',
    height: '',
};