import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import left from "../assets/left.png";
import right from "../assets/right.png";

const MovieList = ({ title, movieType }) => {
  const [initialList, setInitialList] = useState("");

  // console.log(nowPlaying);
  useEffect(() => {
    movieType && setInitialList(movieType.slice(0, 9));
  }, [movieType]);

  const leftSlider = () => {
    let indexValue = movieType.indexOf(initialList[initialList.length - 1]);
    let nextIndex = indexValue * 1 + 9;
    if (movieType.length > nextIndex) {
      setInitialList(movieType.slice(indexValue, nextIndex));
    } else {
      console.log("else", indexValue, movieType.length);
      let difference = movieType.length - indexValue;
      let newMovieArray = [
        ...movieType.slice(indexValue, indexValue + difference),
        ...movieType.slice(0, 9 - difference),
      ];
      setInitialList(newMovieArray);
    }
  };
  const rightSlider = () => {
    let reverseMovieType = [];
    for (let i = movieType.length - 1; i >= 0; i--) {
      reverseMovieType.push(movieType[i]);
    }
    let indexValue = reverseMovieType.indexOf(
      initialList[initialList.length - 1]
    );
    let nextIndex = indexValue * 1 + 9;
    if (movieType.length > nextIndex) {
      setInitialList(movieType.slice(indexValue, nextIndex));
    } else {
      console.log("else", indexValue, movieType.length);
      let difference = movieType.length - indexValue;
      let newMovieArray = [
        ...movieType.slice(indexValue, indexValue + difference),
        ...movieType.slice(0, 9 - difference),
      ];
      setInitialList(newMovieArray);
    }
  };

  return (
    <>
      {initialList && (
        <div>
          <div className="flex justify-between items-center">
            <h1 className=" font-serif text-2xl py-4 px-2">{title}</h1>
            <div className="px-5">
              <button
                className="mx-2 px-2 bg-black rounded-xl w-10 h-10"
                onClick={leftSlider}
              >
                <img src={left} alt="left-button" className="w-5" />
              </button>
              <button
                className="mx-2 px-2 bg-black rounded-xl w-10 h-10"
                onClick={rightSlider}
              >
                <img src={right} alt="left-button" className="w-5" />
              </button>
            </div>
          </div>

          <div className=" flex gap-3 justify-center">
            <div className="flex ">
              {initialList.map((movie) => (
                <Link key={movie.id} to={`${movie.id}`}>
                  <MovieCard poster={movie?.poster_path} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
