import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer";
import PlayVideo from "./PlayVideo";

const VideoContainer = ({ movieId }) => {
  useTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailer);
  if (!trailer) return;
  //  console.log(trailer);
  return (
    <div className=" ">
      <PlayVideo trailerKey={trailer.key} mute="true" />
    </div>
  );
};

export default VideoContainer;
