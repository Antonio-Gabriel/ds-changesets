import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  variant: "Primary" | "Secondary";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, variant, onClick }) => {
  const variantStyle = variant === "Primary" ? "bg-blue-500" : "bg-red-500";
  const variantHover =
    variant === "Primary" ? "hover:bg-blue-600" : "hover:bg-red-600";

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "px-4 py-2 text-white rounded",
        variantStyle,
        variantHover
      )}
    >
      {label}
    </button>
  );
};
