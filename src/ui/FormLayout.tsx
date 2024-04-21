import { FormEvent, ReactNode } from "react";
import Logo from "./Logo";
import { ZodType } from "zod";

import * as z from "zod";

interface FormLayoutProps<T extends ZodType> {
  children: ReactNode;
  onSendData: (values: z.infer<T>) => void;
}
export default function FormLayout<T extends ZodType>({
  children,
  onSendData,
}: FormLayoutProps<T>) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dt = new FormData(e.currentTarget);
    const data = Object.fromEntries(dt);

    onSendData(data);
  }
  return (
    <div className=" py-6 w-full ">
      {" "}
      <Logo size={128} className="opacity-50" />
      <div className="w-full text-primaryText flex flex-col gap-4 items-center justify-center py-8">
        <p>Join us now!</p>
        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center gap-8 justify-center">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
