import { MoviesGrid } from "./MoviesGrid";
import style from "../style/App.module.css";

export function App() {
  return (
    <div>
      <header>
        <h1 className={style.title}>Películas</h1>
      </header>
      <main>

     <MoviesGrid/>
      </main>
    </div>
  );
}
