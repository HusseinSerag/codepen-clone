import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label: string;
  id: string;
}
export default function Input({
  id,
  label,

  iconLeft,
  iconRight,
  ...otherProps
}: InputProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center justify-center px-4 rounded-lg py-1 gap-3 w-full md:w-96 bg-gray-200">
        {iconLeft}
        <input
          className="flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg "
          id={id}
          {...otherProps}
        />
        {iconRight}
      </div>
    </div>
  );
}
