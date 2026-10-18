/** Borboleta de asas em forma de folha — ilustração própria inspirada na identidade da marca. */
export function Butterfly({ className = '', title }) {
  const wing = (
    <>
      {/* asa superior */}
      <path d="M99 80C84 36 38 8 14 30 0 46 30 82 99 82Z" fill="currentColor" fillOpacity=".12" />
      <path d="M99 80C84 36 38 8 14 30 0 46 30 82 99 82Z" />
      <path d="M97 80C76 56 48 38 22 33M97 81C70 70 40 62 12 48M97 80C84 62 70 40 52 22" strokeWidth=".8" opacity=".7" />
      {/* asa inferior */}
      <path d="M98 88C72 90 38 108 48 138 58 158 92 130 99 94Z" fill="currentColor" fillOpacity=".12" />
      <path d="M98 88C72 90 38 108 48 138 58 158 92 130 99 94Z" />
      <path d="M96 92C78 104 62 122 52 140M97 90C74 94 54 104 42 116" strokeWidth=".8" opacity=".7" />
    </>
  )
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {wing}
      <g transform="translate(200 0) scale(-1 1)">{wing}</g>
      <path d="M100 60v50" strokeWidth="2.4" />
      <path d="M100 60c-3-12-10-20-17-24M100 60c3-12 10-20 17-24" strokeWidth="1.2" />
      <circle cx="82" cy="35" r="1.6" fill="currentColor" />
      <circle cx="118" cy="35" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function Leaf({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 35C30 4 92 2 136 35 92 68 30 66 4 35Z" fill="currentColor" fillOpacity=".1" />
      <path d="M4 35h132" />
      <path d="M30 35l16-14M30 35l16 14M58 35l18-15M58 35l18 15M88 35l16-12M88 35l16 12" strokeWidth=".9" opacity=".7" />
    </svg>
  )
}

/** Grupo decorativo de folhas para os cantos das seções. */
export function LeafCluster({ className = '' }) {
  return (
    <div className={`leaf-cluster ${className}`} aria-hidden="true">
      <Leaf className="leaf leaf--a" />
      <Leaf className="leaf leaf--b" />
      <Leaf className="leaf leaf--c" />
    </div>
  )
}

export function GoldDivider() {
  return (
    <div className="gold-divider" aria-hidden="true">
      <span />
      <Butterfly className="gold-divider__icon" />
      <span />
    </div>
  )
}
