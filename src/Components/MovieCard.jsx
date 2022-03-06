import { Link } from "react-router-dom";
import styles from "./style/MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/peliculas/" + movie.id}>
        <img src={imageUrl} alt={movie.title} className={styles.movieImage} />
        <h3>{movie.title}</h3>
      </Link>
    </li>
  );
}
