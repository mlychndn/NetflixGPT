import { API_OPTIONS, TRAILER_API } from "../utils/Constants";

const PlayButton = ({ movieId, trailer, trailerKey }) => {
  const playMovie = async () => {
    if (!trailer) {
      const data = await fetch(
        TRAILER_API.replace("{movieId}", movieId),
        API_OPTIONS
      );
      const trailerData = await data.json();

      trailerKey(trailerData.results[0].key);
    } else {
      trailerKey(trailer);
    }
  };

  return (
    <button
      className=" bg-white text-black font-serif px-6 py-2 rounded-md mr-2 hover:opacity-80"
      onClick={playMovie}
    >
      ▶ Play
    </button>
  );
};

export default PlayButton;
