import { forwardRef } from "react";

export const ErrorMsg = forwardRef(function ErrorMsg(
  { children, className = "", ...props },
  ref,
) {
  return (
    <p
      ref={ref}
      className={
        "text-[15px] text-transparent-gray max-w-100 text-center" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </p>
  );
});
