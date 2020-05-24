import React from "react"
import { Link } from "gatsby"
import Player from "./Player"
import lightLogo from "../images/brand/hsaml-light.svg"
import PodcastArt from "../images/brand/hsaml-artwork.png"
import "./header.css"

const Header = ({ latestEpisode }) => {
  const {
    title,
    audio,
    description,
    length,
    formattedDate,
    path,
    episode,
  } = latestEpisode.node.frontmatter
  return (
    <header className="header header-full">
      <div className="header-content-wrapper">
        <Link className="home-logo" to="/">
          <img className="logo" src={PodcastArt} alt="How Should a Man Live Logo" height="150" />
        </Link>
        <nav className="nav">
          <Link to="episodes">Episodes</Link>
          <Link to="about">About Us</Link>
          <Link to="contact">Contact</Link>
        </nav>
      </div>
      <Player
        title={title}
        description={description}
        audio={audio}
        episode={episode}
        path={path}
        length={length}
        formattedDate={formattedDate}
      />
    </header>
  )
}

export default Header
