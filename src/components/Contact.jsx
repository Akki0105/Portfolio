function Contact() {
  return (
    <section className="contact container">
      <h2>Contact Me</h2>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact