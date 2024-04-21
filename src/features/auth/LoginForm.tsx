import { FaEnvelope } from "react-icons/fa";
import Input from "../../ui/Input";

import PasswordInput from "../../ui/PasswordInput";
import FormLayout from "../../ui/FormLayout";
import { signupValidation, ValidationSignUp } from "../../helpers/validation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdPassword } from "react-icons/md";

export default function LoginForm() {
  function onSubmitSignupForm(data: ValidationSignUp) {
    console.log(data);
  }
  return (
    <FormLayout<typeof signupValidation> onSendData={onSubmitSignupForm}>
      <Input
        iconLeft={<FaEnvelope className="text-text5000 text-2xl" />}
        label="Email"
        id="email"
        type="email"
        placeholder="Email"
        name="email"
      />
      <PasswordInput
        label="Password"
        id="password"
        enableToggle={true}
        placeholder="Password"
        name="password"
        iconLeft={<MdPassword className="text-text5000 text-2xl" />}
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500 text-xl text-white"
      >
        Login
      </motion.button>

      <p className="text-sm text-primaryText flex items-center gap-2 justify-center">
        Don't have an account?{" "}
        <Link
          className="text-emerald-500 cursor-pointer underline"
          to="/signup"
        >
          Sign up
        </Link>
      </p>
    </FormLayout>
  );
}
