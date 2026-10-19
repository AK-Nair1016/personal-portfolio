import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
