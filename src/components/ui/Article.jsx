import { forwardRef } from "react";

export const Article = forwardRef(function Article(
  { children, className = "", ...props },
  ref,
) {
  return (
    <article
      ref={ref}
      className={"max-h-26 overflow-scroll text-justify" + " " + className}
      {...props}
    >
      {children}
    </article>
  );
});
