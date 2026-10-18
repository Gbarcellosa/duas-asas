import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import { Butterfly } from './Ornaments'
import { IconMenu, IconClose } from './Icons'
import WhatsAppButton from './WhatsAppButton'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="brand" onClick={close} aria-label="Duas Asas — ir para o início">
          <Butterfly className="brand__mark" />
          <span className="brand__name">Duas Asas</span>
        </a>

        <nav id="menu-principal" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton variant="primary" size="sm" className="nav__cta">
            Agendar atendimento
          </WhatsAppButton>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}
