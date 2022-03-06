import { useEffect, useState } from "react";
import { get } from "../utils/httpCliente";


import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";
import style from "./style/MoviesGrid.module.css";


export function MoviesGrid() {
  //console.log(movies);

  // Hook de react para devolver el array de peliculas
  // const moviesState = useState([]);
  //Variable donde guardaremos las Peliculas recibidas del Fetch
  //const movies=moviesState[0];
  //Funcion para poder acceder a las peliculas
  // const setMovies = moviesState[1];

  //Mismo codigo de las lineas 9 a 14
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
 
  //Solicitud asincrona a la API.
  useEffect(() => {
    setIsLoading(true);

     get("/discover/movie")
      .then((data) => {
        setIsLoading(false);
        setMovies(data.results);
      });
  }, []); // !!IMPORTANTE!!! AÑADIR ARRAY VACIO PARA EVITAR BUCLES INFINITOS
  
  if(isLoading){
    return    <Spinner/>
  }

  
  return (
    <ul className={style.MovieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
