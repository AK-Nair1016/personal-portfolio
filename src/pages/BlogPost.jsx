import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts.js'

function formatDate(d) {
  const date = new Date(d + 'T00:00:00')
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <>
        <Link to="/blog" className="back-link">cd ../blog</Link>
        <div className="empty-state">404: post not found</div>
      </>
    )
  }

  return (
    <article className="post-detail">
      <Link to="/blog" className="back-link">cd ../blog</Link>
      <h1>{post.title}</h1>
      <div className="post-meta">
        {formatDate(post.date)} &nbsp;season-{post.season}
        {post.episode ? ` / ep-${post.episode}` : ' / summary'}
      </div>

      <div className="post-body">
        <p>{post.summary}</p>

        {post.concepts?.length > 0 && (
          <>
            <h3>key concepts</h3>
            <ul>
              {post.concepts.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </>
        )}

        {post.project && (
          <div className="project-box">
            <h4>{post.project.name}</h4>
            <p>{post.project.why}</p>
            {post.project.githubUrl && (
              <a href={post.project.githubUrl} target="_blank" rel="noreferrer">
                view source
              </a>
            )}
          </div>
        )}

        {post.takeaway && (
          <>
            <h3>takeaway</h3>
            <p>{post.takeaway}</p>
          </>
        )}
      </div>
    </article>
  )
}
