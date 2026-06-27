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
      subtitle="Drop your photos into /public/images/ using the filenames in src/data/portfolioData.js — they'll appear here automatically."
    >
      <div className="gallery-grid">
        {gallery.map((g) => (
          <GalleryItem key={g.file} {...g} />
        ))}
      </div>
    </Section>
  )
}
