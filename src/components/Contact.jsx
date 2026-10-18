import { contact } from '../data/contact'
import { isDev } from '../lib/whatsapp'
import { IconWhatsApp, IconInstagram, IconMail, IconPhone, IconPin, IconClock } from './Icons'
import WhatsAppButton from './WhatsAppButton'

function Pending({ icon: Icon, label, hint }) {
  return (
    <li className="contact__item contact__item--pending">
      <Icon className="contact__icon" />
      <div>
        <h3>{label}</h3>
        <p>
          [pendente] {hint} — edite <code>src/data/contact.js</code>. <em>Oculto no site publicado.</em>
        </p>
      </div>
    </li>
  )
}

export default function Contact() {
  const c = contact
  return (
    <section id="contato" className="section section--light" aria-labelledby="contato-titulo">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Contato</p>
          <h2 id="contato-titulo">Vamos conversar?</h2>
          <p className="section__lead">O WhatsApp é o caminho mais rápido para tirar dúvidas e agendar.</p>
        </div>

        <ul className="contact reveal">
          <li className="contact__item contact__item--main">
            <IconWhatsApp className="contact__icon" />
            <div>
              <h3>WhatsApp</h3>
              <p>{c.whatsappDisplay}</p>
              <WhatsAppButton variant="primary" size="sm">
                Chamar no WhatsApp
              </WhatsAppButton>
            </div>
          </li>

          {c.phone ? (
            <li className="contact__item">
              <IconPhone className="contact__icon" />
              <div>
                <h3>Telefone</h3>
                <p>
                  <a href={`tel:+${c.phone}`}>{c.phoneDisplay || c.phone}</a>
                </p>
              </div>
            </li>
          ) : (
            isDev && <Pending icon={IconPhone} label="Telefone" hint="confirmar se o número recebe ligações" />
          )}

          {c.instagramUrl ? (
            <li className="contact__item">
              <IconInstagram className="contact__icon" />
              <div>
                <h3>Instagram</h3>
                <p>
                  <a href={c.instagramUrl} target="_blank" rel="noopener noreferrer">
                    {c.instagramHandle || 'Ver perfil'}
                  </a>
                </p>
              </div>
            </li>
          ) : (
            isDev && <Pending icon={IconInstagram} label="Instagram" hint="informar o link oficial do perfil" />
          )}

          {c.email ? (
            <li className="contact__item">
              <IconMail className="contact__icon" />
              <div>
                <h3>E-mail</h3>
                <p>
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </p>
              </div>
            </li>
          ) : (
            isDev && <Pending icon={IconMail} label="E-mail" hint="informar o e-mail oficial" />
          )}

          {c.address ? (
            <li className="contact__item">
              <IconPin className="contact__icon" />
              <div>
                <h3>Endereço</h3>
                <p>{c.address}</p>
              </div>
            </li>
          ) : (
            isDev && <Pending icon={IconPin} label="Endereço" hint="informar, se houver atendimento presencial divulgado" />
          )}

          {c.hours ? (
            <li className="contact__item">
              <IconClock className="contact__icon" />
              <div>
                <h3>Horário de funcionamento</h3>
                <p>{c.hours}</p>
              </div>
            </li>
          ) : (
            isDev && <Pending icon={IconClock} label="Horário de funcionamento" hint="informar os horários" />
          )}
        </ul>
      </div>
    </section>
  )
}
