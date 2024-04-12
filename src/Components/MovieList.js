import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movieType }) => {
  if (!movieType) return;
  // console.log(nowPlaying);

  return (
    <div>
      <h1 className=" font-serif text-2xl py-4 px-2">{title}</h1>

      <div className=" flex overflow-x-scroll no-scrollbar ">
        <div className=" flex">
          {movieType.map((movie) => (
            <Link key={movie.id} to={`${movie.id}`}>
              <MovieCard poster={movie?.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
