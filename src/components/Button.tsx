import React from "react";
import { cn } from "../../utils/class";

interface IButtonProps {
  text: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
  loading?: boolean
}
export default function Button(props: IButtonProps) {
  const { loading, disabled, text, variant, onClick, type } = props;
  const className =
    variant === "primary"
      ? cn("flex bg-primary hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-sm", disabled ? "bg-gray-400 text-gray cursor-not-allowed" : "", loading ? "cursor-progress" : "")
      : cn("flex border border-primary text-primary font-bold py-2 px-4 rounded-sm hover:bg-primary   hover:text-white", disabled ? "border-gray-400 text-gray-400 cursor-not-allowed" : "", loading ? "cursor-progress" : "");

  return (
    <button disabled={disabled} className={className}
      type={type}
      onClick={onClick}>
      {loading ? <> Loading</> : <>{text}</>}
    </button>
  );
}
