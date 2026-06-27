import React, { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData.js'

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Photos' },
  { id: 'education', label: 'Education' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="nav-wrap">
      <nav className="nav-pill" aria-label="Section navigation">
        <span className="nav-logo">{profile.firstName}.</span>
        {TABS.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`nav-link ${active === t.id ? 'active' : ''}`}
          >
            {t.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
