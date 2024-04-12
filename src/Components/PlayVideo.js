const PlayVideo = ({ trailerKey }) => {
  return (
    <div>
      <iframe
        className=" w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerKey + "?autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default PlayVideo;
