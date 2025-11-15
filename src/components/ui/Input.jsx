import { forwardRef } from "react";

export const Input = forwardRef(function Input(
  { className = "", ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={
        "w-full bg-input-gray rounded-[20px] py-3.75 font-roboto text-xl text-center font-normal placeholder:text-center placeholder:text-gray-500" +
        " " +
        className
      }
      {...props}
    />
  );
});
