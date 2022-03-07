import { Buscador } from "../components/Buscador";
import { MoviesGrid } from "../components/MoviesGrid";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce"; //Busquedas sin necesidad de pulsar el boton

export function LandingPage(){

    const query=useQuery();
    const search =query.get('search');

    const debouncedSearch = useDebounce(search, 500); //Realiza la busqueda tras un tiempo sin teclear

    return (
        <div>
            <Buscador/>
            <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
        </div>
       
    );
}