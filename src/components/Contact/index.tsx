import Link from "next/link";
import {
  At,
  ChatCircleText,
  ChatText,
  Envelope,
  MapPin,
  TelegramLogo,
  User,
  WhatsappLogo,
} from "phosphor-react";
import { ButtonSecondary, Container, Title } from "../../styles/styles";
import { ContainerContact, ContactContent, Form } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <ContainerContact>
        <Title>
          Contato
          <span>
            <Envelope /> Contact
          </span>
        </Title>

        <ContactContent>
          <div className="contact-content">
            <h4>
              <WhatsappLogo size={22} color="#00fffb" /> WhatsApp{" "}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=5511959380039">
              <a target="_blank">
                <span>+55 11 95938-0039</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {" "}
              <TelegramLogo size={22} color="#00fffb" /> Email{" "}
            </h4>
            <Link href="mailto:michaeledavi12@gmail.com">
              <a target="_blank">
                <span>michaeledavi12@gmail.com</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              <MapPin size={22} color="#00fffb" /> Localização
            </h4>
            <span>são paulo - SP</span>
          </div>
        </ContactContent>
      </ContainerContact>
    </Container>
  );
}
