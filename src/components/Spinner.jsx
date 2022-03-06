import style from "./style/Spinner.module.css";

export function Spinner(){
    return(
        <div className={style.spinner} >
            <span className={style.loader}></span>   
        </div>
    );
}