import { Icon } from "@iconify/react";
import { Link } from "react-router-dom"

const VARIANTS = {
  primary: "bg-primary text-heading-1 border-heading-1",
  dark: "bg-heading-1 text-white border-heading-1",
  outline: "bg-transparent text-heading-1 border-heading-1",
  white: "bg-white text-heading-1 border-heading-1",
};

const SIZES = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};


const Button = ({
  text,
  to,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  className = "",
  onClick
}) => {

  const classes = `
      inline-flex items-center justify-center gap-2 rounded-full font-display font-bold leading-none whitespace-nowrap
      cursor-pointer select-none border-2 border-b-4 boder-r-4 transition-all duration-300 ease-out hover:-translate-y-0.5 
      hover:shadow-[4px_6px_opx_rgba(38,38,38,1)]active:translate-y-0 active:shadow-none
      ${VARIANTS[variant]} ${SIZES[size]} ${className}
    `.trim();

  const content = (
    <>
      {text}
      {icon && <Icon icon={icon} width={18} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}

    >
      {content}
    </button>
  )
}

export default Button