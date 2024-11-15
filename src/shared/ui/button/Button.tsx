import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx("flex w-full justify-center rounded-3xl px-3 py-3 text-sm font-semibold leading-6 shadow-sm", className, {
        ["bg-chinese-green text-smoky-black focus-visible:outline-chinese-green"]: variant === "primary",
        [""]: variant === "secondary",
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;