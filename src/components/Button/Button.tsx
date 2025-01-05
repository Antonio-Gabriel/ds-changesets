import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  description?: string;
  variant: "Primary" | "Secondary";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  description,
  onClick,
}) => {
  const variantStyle = variant === "Primary" ? "bg-blue-500" : "bg-red-500";
  const variantHover =
    variant === "Primary" ? "hover:bg-blue-600" : "hover:bg-red-600";

  return (
    <div className="flex flex-col gap-1 w-56">
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

      <small>{description}</small>
    </div>
  );
};
