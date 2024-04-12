import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MOVIE_DETAILS,
  API_OPTIONS,
  ORIGINAL_POSTER,
} from "../utils/Constants";
import PlayButton from "./PlayButton";
import PlayVideo from "./PlayVideo";
import Header from "./Header";

const MovieDetails = () => {
  let { movie_id } = useParams();
  const [details, setDetails] = useState("");
  const [trailerKey, setTrailerKey] = useState("");

  const getMovieDetails = async () => {
    const details = await fetch(
      MOVIE_DETAILS.replace("{MOVIE_ID}", movie_id),
      API_OPTIONS
    );
    const detailsData = await details.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!details) return;

  return (
    <>
      <Header movieId={movie_id} />
      {!trailerKey ? (
        <div className="relative">
          <img
            src={ORIGINAL_POSTER + details?.backdrop_path}
            alt="poster"
            className="absolute -z-10"
          />
          <div className="">
            <div className="pt-10 px-10 pb-5">
              <h1 className="text-5xl font-bold text-white">
                {details?.title}
              </h1>
              <div className="w-[30%] py-4">
                <p className="text-lg text-slate-600 font-semibold">
                  {details?.overview}
                </p>
              </div>
              <PlayButton
                movieId={movie_id}
                trailer=""
                trailerKey={setTrailerKey}
              />
              <button className="m-3 w-20 bg-slate-400 text-black py-2 px-4 rounded-xl font-extrabold text-xl opacity-50">
                Info
              </button>
            </div>
          </div>
        </div>
      ) : (
        <PlayVideo trailerKey={trailerKey} />
      )}
    </>
  );
};

export default MovieDetails;
