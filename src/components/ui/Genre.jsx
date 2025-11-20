import { forwardRef } from "react";

export const Genre = forwardRef(function Genre(
  { children, className = "", ...props },
  ref,
) {
  return (
    <p
      ref={ref}
      className={
        "border-2 border-black px-4.25 py-1.5 rounded-[20px] text-center font-medium text-lg" +
        " " +
        className
      }
    >
      {children}
    </p>
  );
});
