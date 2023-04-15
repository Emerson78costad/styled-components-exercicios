import React from "react";
import CardContainer from "./Styled";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CardContainer className="box-pagina-principal" onClick={reproduzVideo}>

      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
      

    </CardContainer>
  );
}

export default CardVideo;
