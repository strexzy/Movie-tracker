import { forwardRef } from "react";

export const Poster = forwardRef(function Poster(
  { className = "", ...props },
  ref,
) {
  return (
    <img
      ref={ref}
      className={"object-cover rounded-2xl overflow-hidden" + " " + className}
      {...props}
    />
  );
});

export default Poster;
