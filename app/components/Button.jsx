// import Link from "next/link";
import { Link } from "next-view-transitions";
import clsx from "clsx";

const ButtonVariant = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  black: "btn--black",
};

const Button = ({
  children,
  icon,
  href = "",
  type = "link",
  variant = "primary",
  className = "",
}) => {
  const Element = type === "button" ? "button" : Link;
  const variantClass = ButtonVariant[variant];
  const buttonClass = clsx("btn", variantClass, className);

  return (
    <Element href={href} role="button" className={buttonClass}>
      {children}
    </Element>
  );
};

export default Button;
