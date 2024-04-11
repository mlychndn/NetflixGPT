import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const ratedMovies = useSelector((store) => store.movies?.topRatedMovies);

  const topRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      //    console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !ratedMovies && topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
