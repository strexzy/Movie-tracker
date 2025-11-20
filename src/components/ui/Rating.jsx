import { forwardRef } from "react";

export const Rating = forwardRef(function Rating(
  { reviewsCount = "?", rating = "?", className = "", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      {...props}
      className={"flex items-center gap-3 mt-7" + " " + className}
    >
      <div className="flex flex-col">
        <p className="text-center">IMDB Rating</p>
        <p className="text-center text-[15px]">
          ⭐ {rating}
          <span className="text-xs text-text-secondary">/10</span>
        </p>
      </div>
      <p className="font-[15px] text-text-secondary">{reviewsCount} Reviews</p>
    </div>
  );
});

export default Rating;
