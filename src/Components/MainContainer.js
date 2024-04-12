import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const moviesAll = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailer = useSelector((store) => store?.movies?.trailer);
  if (!moviesAll) return;

  const mainMovie = moviesAll[0];
  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle
        title={title}
        overview={overview}
        trailer={trailer}
        movieId={id}
      />
      <VideoContainer movieId={id} />
    </div>
  );
};

export default MainContainer;
