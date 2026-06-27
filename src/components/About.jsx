import React from 'react'
import Section from './Section.jsx'
import { profile } from '../data/portfolioData.js'

export default function About() {
  return (
    <Section id="about" eyebrow="About me" eyebrowColor="blue" title="A bit about who I am">
      <div className="about-layout">
        <div className="about-text">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="pull-quote">{profile.quote}</div>
      </div>
    </Section>
  )
}
