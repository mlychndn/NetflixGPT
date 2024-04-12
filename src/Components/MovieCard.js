import { POSTER_CDN } from "../utils/Constants";

const MovieCard = ({ poster, movieId }) => {
  if (!poster) return null;

  return (
    <div className=" w-48 mr-2 hover:scale-150  transform transition-all duration-700">
      <img alt="MoviePoster" src={POSTER_CDN + poster} />
    </div>
  );
};

export default MovieCard;
