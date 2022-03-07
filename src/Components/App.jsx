
import style from "./style/App.module.css";
import { DetallesPelicula } from "../pages/DetallesPelicula";
import { LandingPage } from "../pages/LandingPage";

import { BrowserRouter, Routes, Route, Link , Navigate} from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className={style.title}>Películas</h1>
        </Link>        
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/peliculas/:movieId" element={<DetallesPelicula />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
