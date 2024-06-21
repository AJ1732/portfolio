import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({ children, className, onClick, disabled, type }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        `flex-center rounded bg-primary-500 px-6 py-2 font-bebas text-xl tracking-wider text-zinc-800 transition-all duration-300 hover:bg-primary-400 hover:text-zinc-900 active:scale-[0.99]`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
