const PlayVideo = ({ trailerKey, mute }) => {
  return (
    <div>
      <iframe
        className=" w-screen aspect-video"
        src={
          mute === "true"
            ? "https://www.youtube.com/embed/" +
              trailerKey +
              "?autoplay=1&mute=1"
            : "https://www.youtube.com/embed/" + trailerKey + "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default PlayVideo;
