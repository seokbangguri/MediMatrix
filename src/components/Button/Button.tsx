import { ButtonProps } from "./button.props";

const Button = ({ appearance, styles, children }: ButtonProps) => {
  if (appearance === "primary") {
    return (
      <button
        className={`bg-gradient-green text-xl rounded-sm w-[330px] md:w-[390px] lg:w-[430px] py-3 text-white font-semibold cursor-pointer border-2 border-white hover:border-button-green hover:bg-gradient-white hover:text-black transition-colors duration-150 ${styles}`}
      >
        {children}
      </button>
    );
  } else if (appearance === "ghost") {
    return (
      <button
        className={`border-box border-2 border-button-green text-xl rounded-sm w-[330px] md:w-[390px] lg:w-[430px] py-3 text-black hover:text-white font-semibold hover:opacity-75 cursor-pointer hover:bg-gradient-green transition-colors duration-150 ${styles}`}
      >
        {children}
      </button>
    );
  } else if (appearance === "custom") {
    return (
      <button
        className={`text-lg bg-button-green font-semibold rounded-xs text-white border-transparent inline-block min-w-[130px] py-2 border hover:opacity-75 ${styles}`}
      >
        {children}
      </button>
    );
  } else {
    return <button className={` ${styles}`}>{children}</button>;
  }
};

export default Button;
