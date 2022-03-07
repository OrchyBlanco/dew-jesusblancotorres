import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import { App } from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


/*
function Contenido({ titulo, children}){

//Obtener datos desde props
//function Contenido(props){
//console.log(props);
// const titulo=props.titulo
// const contenido=props.contenido

//Deconstruyendo props
//const { titulo, contenido}=props;

  return (
  <div className="container">
    <h1>{titulo}</h1>
    <div>{children}</div>
  </div>
  )
}
*/
