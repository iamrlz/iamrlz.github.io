import React from 'react'
import Section from './Section.jsx'
import { skills } from '../data/portfolioData.js'

const PALETTE = [
  { bg: 'var(--blue-soft)' },
  { bg: 'var(--coral-soft)' },
  { bg: 'var(--mint-soft)' },
  { bg: 'var(--sun-soft)' },
  { bg: 'var(--violet-soft)' },
]

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" eyebrowColor="mint" title="What I work with">
      <div className="skills-wrap">
        {Object.entries(skills).map(([group, items], gi) => (
          <div className="skill-row" key={group}>
            <span className="skill-row-label">{group}</span>
            <div className="skill-pills">
              {items.map((item, i) => (
                <span
                  className="skill-pill"
                  key={item}
                  style={{ background: PALETTE[(gi + i) % PALETTE.length].bg }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
