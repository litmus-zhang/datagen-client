import React from "react";
import { cn } from "../../utils/class";

interface IButtonProps {
  text: string;
  variant: "solid" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean
  loading?: boolean
}
export default function Button(props: IButtonProps) {
  const { loading, disabled, text, variant, onClick, type } = props;
  const className =
    variant === "solid"
      ? cn("flex bg-primary outline hover:outline-4 hover:outline-primary/50  w-fit text-center text-white font-bold py-2 px-4 rounded-sm", disabled ? "text-gray-1 outline-none bg-transparent cursor-not-allowed" : "", loading ? "cursor-progress" : "") : cn("flex text-black w-fit text-center font-bold py-2 px-4 rounded-sm border hover:outline hover:outline-4 hover:outline-gray-1/50", disabled ? " text-gray-1/50 outline-none bg-tranparent cursor-not-allowed" : "", loading ? "cursor-progress" : "");

  return (
    <button disabled={disabled} className={className}
      type={type}
      onClick={onClick}>
      {loading ? <> Loading</> : <>{text}</>}
    </button>
  );
}
