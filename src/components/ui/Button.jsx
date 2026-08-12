import { Link } from "react-router-dom"



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
      inline-flex items-center justify-center gap-2 rounded-full font-display font-bold leading-none
    `

    return (
        <div>Button</div>
    )
}

export default Button