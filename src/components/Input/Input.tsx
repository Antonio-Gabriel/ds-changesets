import { FC, InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        {...props}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
