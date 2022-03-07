import { Link } from "react-router-dom";
import styles from "./style/MovieCard.module.css";
import placeholder from "./img/placeholder.png";

export function MovieCard({ movie }) {
  const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder; //Si no existe imagen añade la que tenemos en img/placeholder
  return (
    <li className={styles.movieCard}>
      <Link to={"/peliculas/" + movie.id}>
        <img src={imageUrl} alt={movie.title} className={styles.movieImage} />
        <h3>{movie.title}</h3>
      </Link>
    </li>
  );
}
