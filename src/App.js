import React from "react";
import CardVideo from "./Componentes/CardVideo";
import FooterContainer from "./Componentes/Footer/style"
import "./styles.css";
import { MainContainer, HeaderContainer, NavContainer } from "./Styled";
export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      
      <div className="tela-inteira">
        <HeaderContainer>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderContainer>

        <MainContainer>
          <NavContainer className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </NavContainer>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </MainContainer>

        <FooterContainer>
          <h4>Oi! Eu moro no footer!</h4>
        </FooterContainer>
      </div>
    </div>
  );
}
