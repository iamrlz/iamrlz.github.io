import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <p>built with React · deployed on GitHub Pages · {new Date().getFullYear()}</p>
    </footer>
  )
}
