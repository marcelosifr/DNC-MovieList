import { useEffect, useState } from "react";
import { MovieService } from "../../api/movieservice";
import MovieCard from "../../components/moviecard/moviecard.jsx";

const home = ({ searchValueProp }) => {
  const [movies, setMovies] = useState([])

  async function getMovies(){
    const { data:{results} 
  } = await MovieService.getMovies();

    setMovies(results);
    }

  async function getMoviesSearch(movieString){
    const {
      data: { results }
    } = await MovieService.searchMovies(movieString); // fazendo o fetch no searchMovies

    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []); //por que vem vazio? porque o componente é montado antes dos dados chegarem.
  
  useEffect(() => {
  if (searchValueProp){
    getMoviesSearch(searchValueProp);
  }
  if(searchValueProp=== ""){
    getMovies();
  }

  }, [searchValueProp]);

  return (
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movieProp={movie}/>
        </div>) )}
    </section> //retorno de HTML tem que ser em parenteses
  );
};

export default home;