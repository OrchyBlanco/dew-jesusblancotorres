import styles from "../style/MovieCard.module.css";

export function MovieCard({movie}){
   const imageUrl= "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <img src={imageUrl} alt={movie.title} className={styles.movieImage} />
            <h3>{movie.title}</h3>
        </li>
    )
}