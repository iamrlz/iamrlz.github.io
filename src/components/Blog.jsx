import React from 'react'
import Section from './Section.jsx'
import { blogPosts, profile } from '../data/portfolioData.js'

export default function Blog() {
  return (
    <Section id="blog" eyebrow="Writing" eyebrowColor="mint" title="From the blog">
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.title}>
            <div>
              <p className="blog-card-title">
                <a href={post.link} target="_blank" rel="noreferrer">{post.title}</a>
              </p>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
            <span className="blog-date">{post.date}</span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 18, fontSize: 14 }}>
        More on <a href={profile.social.medium} target="_blank" rel="noreferrer">Medium →</a>
      </p>
    </Section>
  )
}
