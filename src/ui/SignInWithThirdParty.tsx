import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SignInWithThirdPartyProps {
  onClick: () => void;
  icon: ReactNode;
  text: string;
}
export default function SignInWithThirdParty({
  onClick,
  icon,
  text,
}: SignInWithThirdPartyProps) {
  return (
    <motion.button
      className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
      type="button"
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {icon}

      <p className="text-xl text-white">{text}</p>
    </motion.button>
  );
}
