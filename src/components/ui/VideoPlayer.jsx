import { forwardRef } from "react";

export const VideoPlayer = forwardRef(function VideoPlayer(
  {
    className = "",
    trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    ...props
  },
  ref,
) {
  return (
    <video
      ref={ref}
      src={trailer}
      controls
      className={
        "w-130 h-70 rounded-[20px] overflow-hidden object-cover" +
        " " +
        className
      }
      {...props}
    ></video>
  );
});
