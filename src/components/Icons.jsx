const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export const IconLaser = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.4" />
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
)

export const IconEar = (p) => (
  <svg {...base} {...p}>
    <path d="M7 10a5 5 0 0 1 10 0c0 2.6-1.6 3.6-2.6 4.9-.9 1.2-.5 3.1-2.4 3.6-1.8.4-3.1-.8-3.1-2.4" />
    <path d="M10 10.2a2 2 0 0 1 4 0c0 1.1-.9 1.5-1.4 2.2" />
  </svg>
)

export const IconWhatsApp = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 14.96l-.3-.19-3.1.82.83-3.02-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 3.9c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.93 2.5 1.06 2.67c.13.17 1.8 2.86 4.45 3.9 2.2.87 2.65.7 3.13.65.48-.04 1.55-.63 1.77-1.24.22-.61.22-1.14.15-1.25-.06-.11-.24-.17-.5-.3-.27-.14-1.55-.77-1.79-.86-.24-.09-.42-.13-.6.13-.17.26-.68.86-.83 1.03-.15.18-.3.2-.57.07-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.3-1.55-1.45-1.8-.15-.27-.02-.4.11-.54.12-.12.27-.31.4-.46.13-.16.17-.27.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.43-.82-1.96-.21-.51-.43-.44-.6-.45h-.5Z" />
  </svg>
)

export const IconInstagram = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
)

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.5l1.7 4.2-2.2 1.4a11 11 0 0 0 5.4 5.4l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const IconChevron = (p) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const IconUser = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8.5" r="3.5" />
    <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
  </svg>
)
