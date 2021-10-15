import React from "react"
// import { Link } from "gatsby"
import twitter from "../images/footer/twitter.svg"
import google from "../images/footer/google.png"
import spotify from "../images/footer/spotify.png"
import rss from "../images/footer/rss.png"
import itunes from "../images/footer/itunes.svg"
import podcast from "../images/footer/podcast.png"
import "./footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <section className="footer-find-episodes">
        <p>
          Find our episodes wherever you listen to podcasts
        </p>
        <address className="footer-icons">
          {/* <a
            href="https://twitter.com/LadybugPodcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" height="100" />
          </a> */}
          <a
            href="https://podcasts.google.com/?feed=aHR0cHM6Ly93d3cucmVkZWVtaW5ncHJvZHVjdGl2aXR5LmNvbS9mZWVkL3BvZGNhc3QvaG93LXNob3VsZC1hLW1hbi1saXZl&ved=0CAIQ4aUDahcKEwjQ96HU3NnpAhUAAAAAHQAAAAAQCA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={google} alt="Google Play" />
          </a>
          <a
            href="https://open.spotify.com/show/40QQoeAEag5k12ZsTa31Ke?si=OrbukPgZTSmOKph2mgBePA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={spotify} alt="Spotify" />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/how-should-a-man-live/id1514973930"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={podcast} alt="Apple Podcasts" />
          </a>
          {/* <a
            href="https://www.stitcher.com/podcast/ladybug-podcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={podcast} alt="Stitcher" />
          </a> */}
          <a
            href="https://anchor.fm/s/6657810c/podcast/rss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rss} alt="RSS Feed" />
          </a>
        </address>
      </section>
      {/* <div className="footer-links">
        <Link to="/contact">Sponsor Us</Link>
        <a
          href="https://github.com/ladybug-podcast/ladybug-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fix Our Website
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc0IBTZA1Acv9a05VQAjtSgv-M8GRtGq7yDXSKL_vYKGcBlTw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nominate A Guest
        </a>
        <a
          href="https://forms.gle/UDVfz2cu73UyGhieA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request An Episode
        </a>
      </div> */}
      <p className="footer-copyright">
        {`© How Should a Man Live? ${currentYear}. Produced by Reagan Rose and Miska Wilhelmsson.`}
      </p>
    </footer>
  )
}

export default Footer
