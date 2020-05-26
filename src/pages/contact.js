import React from "react"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import "./pages.css"

const ContactPage = () => (
  <div className="page">
    <SEO title="How Should a Man Live?" />
    <PageHeader />

    <main>
      <div className="page-banner">
        <h1>Contact Us</h1>
      </div>
      <h2>We'd love to hear from you.</h2>
      <form name="contact" className="contact-form" method="POST" data-netlify="true" netlify>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </main>
    <Footer />
  </div>
)

export default ContactPage
