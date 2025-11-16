import { forwardRef } from "react";

export const Title = forwardRef(function Title(
  { children, className = "", ...props },
  ref,
) {
  return (
    <h1
      ref={ref}
      className={"text-center text-3xl font-bold" + " " + className}
    >
      {children}
    </h1>
  );
});
