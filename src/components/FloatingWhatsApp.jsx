import { whatsappLink } from '../lib/whatsapp'
import { messages } from '../data/contact'
import { IconWhatsApp } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      className="fab"
      href={whatsappLink(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Duas Asas pelo WhatsApp (abre em uma nova aba)"
    >
      <IconWhatsApp className="fab__icon" />
      <span className="fab__label">WhatsApp</span>
    </a>
  )
}
