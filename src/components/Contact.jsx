import React from 'react'
import Section from './Section.jsx'
import { profile } from '../data/portfolioData.js'

export default function Contact() {
  return (
    <Section id="contact">
      <div className="contact-card">
        <h2>Let's build something together</h2>
        <p>Open to cloud/full-stack roles, collaboration, and community projects — say hello.</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
          <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.social.twitter} target="_blank" rel="noreferrer">Twitter / X</a>
        </div>
      </div>
    </Section>
  )
}
