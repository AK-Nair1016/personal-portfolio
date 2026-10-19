export default function Contact() {
  return (
    <>
      <h2 className="section-title">contact</h2>
      <div className="contact-links">
        <a href="mailto:aman.kuttannair1016@gmail.com">aman.kuttannair1016@gmail.com</a>
        <a href="#" target="_blank" rel="noreferrer">LinkedIn — add your profile URL</a>
        <a href="#" target="_blank" rel="noreferrer">GitHub — add your profile URL</a>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows={5} required />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
