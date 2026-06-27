import React from 'react'
import Section from './Section.jsx'
import { achievements } from '../data/portfolioData.js'

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Earned, not generic"
      eyebrowColor="sun"
      title="Achievements & certifications"
      subtitle="Titles and certifications I've picked up along the way."
    >
      <div className="badge-wall">
        {achievements.map((a) => (
          <div className="badge" key={a.name}>
            <span className="badge-icon" style={{ background: `var(--${a.color})` }}>
              {a.icon}
            </span>
            <div>
              <div className="badge-name">{a.name}</div>
              <div className="badge-issuer">{a.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
