import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import TeamMemberBlock from "../components/TeamMemberBlock"
import Footer from "../components/Footer"
import { miskaBio, reaganBio } from "../data/bios"
import "./pages.css"

const AboutPage = ({ data }) => (
  <div className="page">
    <SEO title="How Should a Man Live?" />
    <PageHeader />
    <main>
      <h1>About the Podcast</h1>
      <p>
        Who are we? Why are we here? What does it mean to be a man? <br /> 
        This podcast is the joint effort of Reagan Rose and Miska Wilhelmsson.
      </p>
      <br />
      <div className="page-banner">
        <h1>About the Hosts</h1>
      </div>
      <TeamMemberBlock
        name={reaganBio.name}
        title={reaganBio.title}
        location={reaganBio.location}
        bio={reaganBio.bio}
        image={data.reagan.childImageSharp.fixed}
        links={reaganBio.links}
      />
      <TeamMemberBlock
        name={miskaBio.name}
        title={miskaBio.title}
        location={miskaBio.location}
        bio={miskaBio.bio}
        image={data.miska.childImageSharp.fixed}
        links={miskaBio.links}
      />
    </main>
    <Footer />
  </div>
)

export const Photos = graphql`
  {
    reagan: file(relativePath: { eq: "team/reagan.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    miska: file(relativePath: { eq: "team/miska.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
