import React from 'react'
import Section from './Section.jsx'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" eyebrowColor="blue" title="Education">
      <div className="timeline">
        {education.map((e) => (
          <div className="timeline-item" key={e.school}>
            <span className="timeline-dot" style={{ background: `var(--${e.color || 'blue'})` }} />
            <p className="edu-school">{e.school}</p>
            <p className="edu-degree">{e.degree}</p>
            <p className="edu-period">{e.period}</p>
            {e.notes && <p className="edu-notes">{e.notes}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}
