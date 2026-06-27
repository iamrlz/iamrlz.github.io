import React from 'react'
import { useInView } from '../useInView.js'

export default function Section({ id, eyebrow, eyebrowColor = 'blue', title, subtitle, children }) {
  const [ref, inView] = useInView()

  return (
    <section id={id} ref={ref} className={`section ${inView ? 'in-view' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          {eyebrow && (
            <div className="eyebrow">
              <span className="dot" style={{ background: `var(--${eyebrowColor})` }} />
              {eyebrow}
            </div>
          )}
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
