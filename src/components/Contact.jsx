import React from 'react'
import Section from './Section.jsx'
import { profile } from '../data/portfolioData.js'

export default function Contact() {
  return (
    <Section id="contact">
      <div className="contact-card">
        <h2>Let's build something together</h2>
        <p>Open to cloud/devops roles, collaboration, and community projects — say hello.</p>
        <div className="contact-links">
          <a href={`mailto:iamrlz442@gmail.com`}>✉ {profile.email}</a>
          <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`https://linktr.ee/iamrlz`} target="_blank" rel="noreferrer">My Social 💬 </a>
        </div>
      </div>
    </Section>
  )
}
