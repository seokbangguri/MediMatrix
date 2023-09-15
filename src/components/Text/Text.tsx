import { TextProps } from "./text.props";

const Text = ({
  size = "m",
  styles,
  children,
  ...props
}: TextProps): JSX.Element => {
  if (size === "l") {
    return (
      <p
        className={`text-[20px] font-semibold text-light-gray ${styles}`}
        {...props}
      >
        {children}
      </p>
    );
  } else if (size === "m") {
    return (
      <p className={`text-[20px] text-light-gray ${styles}`} {...props}>
        {children}
      </p>
    );
  } else if (size === "s") {
    return (
      <p className={`text-sm text-light-gray ${styles}`} {...props}>
        {children}
      </p>
    );
  } else {
    return <p>{children}</p>;
  }
};

export default Text;
