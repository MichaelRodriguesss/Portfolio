import Link from "next/link";
import { Icons } from "./styles";
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function Links() {
  return (
    <>
      <Icons>
        <Link href={"https://github.com/MichaelRodriguesss"}>
          <a target="_blank" aria-label="Link para o Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/michael-rodrigues12/"}>
          <a target="_blank" aria-label="Link para o Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=5511959380039"}>
          <a
            target="_blank"
            aria-label="Link para entrar em contato via whatsapp"
          >
            <FaWhatsapp />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  );
}
