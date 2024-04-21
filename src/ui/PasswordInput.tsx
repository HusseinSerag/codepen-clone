import { type ReactNode, useState } from "react";
import Input, { InputProps } from "./Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface PasswordProps extends InputProps {
  enableToggle: boolean;
}
export default function PasswordInput({
  label,
  id,
  iconLeft,
  enableToggle,
  ...others
}: PasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  function toggle() {
    setShowPassword((show) => !show);
  }

  let component: ReactNode = null;
  if (enableToggle) {
    if (!showPassword)
      component = (
        <FaEye
          onClick={toggle}
          className="text-text555 text-2xl cursor-pointer"
        />
      );
    else
      component = (
        <FaEyeSlash
          onClick={toggle}
          className="text-text555 text-2xl cursor-pointer"
        />
      );
  }
  return (
    <Input
      iconLeft={iconLeft}
      type={showPassword ? "text" : "password"}
      iconRight={component}
      label={label}
      id={id}
      {...others}
    />
  );
}
