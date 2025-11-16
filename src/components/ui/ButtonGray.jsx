import { forwardRef } from "react";

export const ButtonGray = forwardRef(function ButtonGray(
  { children, className = "", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={
        "text-3xl bg-input-gray p-4 rounded-2xl cursor-pointer" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
});
