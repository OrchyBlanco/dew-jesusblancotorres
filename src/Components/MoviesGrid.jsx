import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { get } from "../utils/httpCliente";
import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";
import { Empty } from "./Empty";

import style from "./style/MoviesGrid.module.css";

export function MoviesGrid({ search }) {
  //console.log(movies);

  // Hook de react para devolver el array de peliculas
  // const moviesState = useState([]);
  //Variable donde guardaremos las Peliculas recibidas del Fetch
  //const movies=moviesState[0];
  //Funcion para poder acceder a las peliculas
  // const setMovies = moviesState[1];

  //Mismo codigo de las lineas 9 a 14
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); //Estado en el que comprobamos que tenemos + peliculas

  //Solicitud asincrona a la API.
  useEffect(() => {
    setIsLoading(true);

    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;

    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results)); //Concatenamos las peliculas anteriores con las nuevas que recibimos
      setHasMore(data.page < data.total_pages); // Si la pagina actual es menor que el total de paginas continual el INFINITE SCROLL
      setIsLoading(false);
    });
  }, [search, page]); // !!IMPORTANTE!!! AÑADIR ARRAY PARA EVITAR BUCLES INFINITOS

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />} //Añadimos el Spinner aqui para evitar que carge encima de las paginas
    >
      <ul className={style.MovieGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
