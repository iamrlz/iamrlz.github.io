import React from 'react'
import Section from './Section.jsx'
import { projects } from '../data/portfolioData.js'

const COLORS = ['blue', 'coral', 'mint', 'violet', 'sun']

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" eyebrowColor="coral" title="Projects">
      <div className="project-grid">
        {projects.map((p, i) => {
          const color = COLORS[i % COLORS.length]
          return (
            <div className="project-card" key={p.name}>
              <div className="project-card-top" style={{ background: `var(--${color})` }}>
                <span>0{i + 1}</span>
              </div>
              <div className="project-card-body">
                <p className="project-name">
                  <a href={p.link} target="_blank" rel="noreferrer">{p.name}</a>
                </p>
                <p className="project-desc">{p.description}</p>
                <div className="tech-row">
                  {p.tech.map((t) => (
                    <span className="tech-chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
