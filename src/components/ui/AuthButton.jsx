import { forwardRef } from "react";

export const AuthButton = forwardRef(function AuthButton(
  { children, className = "", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={
        "w-98.25 bg-button-blue rounded-[20px] py-2 text-[25px] font-normal text-white cursor-pointer" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
});
