import React, { useState } from 'react'
import Section from './Section.jsx'
import { gallery } from '../data/portfolioData.js'

function GalleryItem({ file, caption }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="gallery-item">
      {!errored ? (
        <img src={`/images/${file}`} alt={caption} loading="lazy" onError={() => setErrored(true)} />
      ) : (
        <span className="gallery-placeholder">{file}</span>
      )}
      <span className="gallery-caption">{caption}</span>
    </div>
  )
}

export default function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="Snapshots"
      eyebrowColor="violet"
      title="Photos"
      subtitle="From hackathons to conferences—exploring cloud technologies, open source, and community impact"
    >
      <div className="gallery-grid">
        {gallery.map((g) => (
          <GalleryItem key={g.file} {...g} />
        ))}
      </div>
    </Section>
  )
}
