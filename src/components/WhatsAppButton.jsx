import { whatsappLink } from '../lib/whatsapp'
import { messages } from '../data/contact'
import { IconWhatsApp } from './Icons'

/** Botão/link que abre o WhatsApp da clínica com mensagem pré-preenchida. */
export default function WhatsAppButton({
  children,
  message = messages.general,
  variant = 'primary',
  size,
  icon = true,
  className = '',
  ariaLabel,
}) {
  const cls = ['btn', `btn--${variant}`, size ? `btn--${size}` : '', className].filter(Boolean).join(' ')
  return (
    <a
      className={cls}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ? `${ariaLabel} (abre o WhatsApp em uma nova aba)` : undefined}
    >
      {icon && <IconWhatsApp className="btn__icon" />}
      <span>{children}</span>
    </a>
  )
}
