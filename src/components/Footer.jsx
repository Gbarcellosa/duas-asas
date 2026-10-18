import { contact } from '../data/contact'
import { nav, sections } from '../data/content'
import { Butterfly } from './Ornaments'
import { whatsappLink } from '../lib/whatsapp'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <Butterfly className="brand__mark" />
            <span className="brand__name">Duas Asas</span>
          </div>
          <p className="footer__slogan">Saúde que cuida. Estética que transforma.</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="footer__title">Navegação</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            {sections.owners && (
              <li>
                <a href="#proprietarias">Proprietárias</a>
              </li>
            )}
            <li>
              <a href="#duvidas">Perguntas frequentes</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contato</h2>
          <ul>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
            {contact.phone && (
              <li>
                <a href={`tel:+${contact.phone}`}>Telefone {contact.phoneDisplay || contact.phone}</a>
              </li>
            )}
            {contact.instagramUrl && (
              <li>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram {contact.instagramHandle}
                </a>
              </li>
            )}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} Duas Asas. Todos os direitos reservados.
          {contact.legalInfo && <> {contact.legalInfo}</>}
        </p>
        <p>
          <a href="./politica-de-privacidade.html">Aviso e política de privacidade</a>
        </p>
      </div>
    </footer>
  )
}
