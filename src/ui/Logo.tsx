interface LogoProps {
  size: number;
  className?: string;
}
export default function Logo({ size, className = "" }: LogoProps) {
  return (
    <img
      src="/codepen-wordmark-white.webp"
      alt="logo"
      width={size}
      className={`object-contain  h-auto ${className ? className : ""}`}
    />
  );
}
