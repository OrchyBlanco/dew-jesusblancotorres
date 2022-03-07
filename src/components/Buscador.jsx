import style from "./style/Buscador.module.css";
import { FaSearch } from "react-icons/fa";

import { useSearchParams } from "react-router-dom";

export function Buscador() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={style.buscarContainer} onSubmit={handleSubmit}>
      <div className={style.buscarBox}>
        <input
          className={style.buscarInput}
          type="text"
          placeholder="Buscar Título"
          aria-label="Buscador de Títulos"
          value={search ?? ""}
          onChange={(ev) => {
            const value = ev.target.value;
            setQuery({ search: value });
          }}
        />

        <FaSearch size={20} className={style.buscarButton} />
      </div>
    </form>
  );
}
