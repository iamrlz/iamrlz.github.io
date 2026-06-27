import React, { useState } from 'react'
import { profile } from '../data/portfolioData.js'

export default function Hero() {
  const [errored, setErrored] = useState(false)

  return (
    <div className="hero">
      <div className="hero-blob b1" />
      <div className="hero-blob b2" />
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot" style={{ background: 'var(--mint)' }} />
          Open to opportunities & collaboration
        </div>

        <div className="hero-grid">
          <div>
            <h1 className="hero-name">
              Hey, I'm {profile.firstName} —<br />
              <span className="hl">{profile.title}</span>
            </h1>
            <p className="hero-role">{profile.role}</p>

            <div className="hero-meta-row">
              <span className="meta-pill">📍 {profile.location}</span>
              <span className="meta-pill">@{profile.handle}</span>
            </div>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">See my work</a>
              <a className="btn ghost" href={profile.social.github} target="_blank" rel="noreferrer">GitHub →</a>
            </div>
          </div>

          <div className="hero-photo-frame">
            <div className="hero-photo-inner">
              {!errored ? (
                <img
                  src="/images/profile.jpg"
                  alt={profile.name}
                  onError={() => setErrored(true)}
                />
              ) : (
                <span className="hero-photo-placeholder">
                  Add profile.jpg<br />to /public/images/
                </span>
              )}
            </div>
            <div className="hero-photo-sticker">👋 Hi there</div>
          </div>
        </div>
      </div>
    </div>
  )
}
