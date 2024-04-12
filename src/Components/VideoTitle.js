import PlayButton from "./PlayButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import PlayVideo from "./PlayVideo";

const VideoTitle = ({ title, overview, trailer, movieId: id }) => {
  const [trailerKey, setTrailerKey] = useState("");
  return (
    <>
      {!trailerKey ? (
        <div className=" w-screen aspect-video absolute px-20 pt-[25%] bg-gradient-to-r from-black  text-white ">
          <h1 className=" font-bold text-2xl">{title}</h1>
          <p className=" w-2/4 my-2 font-serif"> {overview}</p>
          <div>
            <Link to={`${id}`}>
              <PlayButton
                movieId={id}
                trailer={trailer}
                trailerKey={setTrailerKey}
              />
            </Link>
            <button className=" bg-gray-600 font-serif px-6 py-2 rounded-md text-white hover:opacity-80">
              More info
            </button>
          </div>
        </div>
      ) : (
        <PlayVideo trailerKey={trailerKey} />
      )}
    </>
  );
};

export default VideoTitle;
