import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Intro from "../components/Intro"
import TeamMemberBlock from "../components/TeamMemberBlock"
import Footer from "../components/Footer"
import { miskaBio, reaganBio } from "../data/bios"
import "./pages.css"

const AboutPage = ({ data }) => (
  <div className="page">
    <SEO title="How Should a Man Live?" />
    <PageHeader />
    <main>
      <Intro />
      <p>
        Who are we? Why are we here? What does it mean to be a man? 
      </p>
      <p>
        This podcast is the joint effort of Reagan Rose and Miska Wilhelmsson.
      </p>
      <div className="page-banner">
        <h1>About Us</h1>
      </div>
      <TeamMemberBlock
        name={reaganBio.name}
        title={reaganBio.title}
        location={reaganBio.location}
        bio={reaganBio.bio}
        image={data.emma.childImageSharp.fixed}
        links={reaganBio.links}
      />
      <TeamMemberBlock
        name={miskaBio.name}
        title={miskaBio.title}
        location={miskaBio.location}
        bio={miskaBio.bio}
        image={data.kelly.childImageSharp.fixed}
        links={miskaBio.links}
      />
    </main>
    <Footer />
  </div>
)

export const Photos = graphql`
  {
    kelly: file(relativePath: { eq: "team/kelly.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    emma: file(relativePath: { eq: "team/emma.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
