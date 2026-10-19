import { Link } from 'react-router-dom'
import { posts } from '../data/posts.js'

function shortHash(slug) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h.toString(16).slice(0, 7)
}

function formatDate(d) {
  const date = new Date(d + 'T00:00:00')
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <h2 className="section-title">blog</h2>
      {sorted.length === 0 && (
        <div className="empty-state">$ git log — no commits yet</div>
      )}
      <div className="gitlog">
        {sorted.map((post) => (
          <div className="gitlog-entry" key={post.slug}>
            <span className="gitlog-hash">commit {shortHash(post.slug)}</span>
            <span className="gitlog-date">{formatDate(post.date)}</span>
            <div className="gitlog-title">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
            <div className="gitlog-tags">
              <span className="gitlog-tag">season-{post.season}</span>
              {post.episode && <span className="gitlog-tag">ep-{post.episode}</span>}
              {post.type === 'season-summary' && <span className="gitlog-tag">summary</span>}
              {post.project && <span className="gitlog-tag">project</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
