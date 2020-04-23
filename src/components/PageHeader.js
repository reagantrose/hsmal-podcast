import React from "react"
import { Link } from "gatsby"
import logo from "../images/brand/hsaml.svg"
import "./header.css"

const Header = () => (
  <header className="header page-header">
    <div className="header-content-wrapper">
      <Link to="/">
        <img className="logo" src={logo} alt="Ladybug Podcast" height="27" />
      </Link>
      <nav className="nav">
        <Link to="episodes" activeStyle={{ borderBottom: "2px solid #3a3a3a" }}>
          Episodes
        </Link>
        <Link to="about" activeStyle={{ borderBottom: "2px solid #3a3a3a" }}>
          About Us
        </Link>
        <Link to="contact" activeStyle={{ borderBottom: "2px solid #3a3a3a" }}>
          Contact
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
