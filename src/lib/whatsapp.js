import { contact } from '../data/contact'

/** Monta o link wa.me com a mensagem corretamente codificada. */
export function whatsappLink(message) {
  const base = `https://wa.me/${contact.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Ambiente de desenvolvimento: mostra lembretes de campos pendentes. */
export const isDev = import.meta.env.DEV
