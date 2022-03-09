import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpCliente";

import style from "./style/DetallesPelicula.module.css";
import { Spinner } from "../components/Spinner";
import placeholder from "../components/img/placeholder.png";

export function DetallesPelicula() {

  const { movieId }  = useParams(); //Nombre del parametro (REVISAR App.jsx) = useParams() |Funcion de react
  
  const [isLoading,setIsLoading] = useState(true);

  const [movie,setMovie]=useState(null) //Hooker para obtener pelicula

  useEffect(() => {
   //Loader
   setIsLoading(true);
   
   //Obtener Pelicula
    get("/movie/"+movieId)
    .then(data=>{
      setIsLoading(false);
      setMovie(data)
    });
  }, [movieId]);

  if(isLoading){
    return    <Spinner/>
  }

  if(!movie){
    return null;
  }
  const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : placeholder; 
  
  return (
    <div className={style.detailsContainer}>
      <img
        className={`${style.peliculaImg} ${style.col}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${style.col}`}>
        <h2 className={style.firstItem}>Titulo: {movie.title}</h2>
        <p>
          <strong>Géneros:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong> Descripción:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
