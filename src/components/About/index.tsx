/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from "phosphor-react";
import { Container, Title } from "../../styles/styles";
import { ButtonPrimary } from "../../styles/styles";
import { AboutContainer } from "./styles";

export function About() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        {/* <div className="AboutImg">
          <img
            className="AboutImg"
            src="/Evander.webp"
            alt="Imagem de perfil Evander"
          />
        </div> */}

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              Olá possuo 22 anos e desenvolvo aplicações há mais de um ano,
              sempre visando a melhor experiência para os usuários.
            </p>
          </div>
          <a href="/pdf/Curriculo (2).pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  );
}
