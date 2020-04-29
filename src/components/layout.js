import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
// import "./global.css"
import { colors, typography, appearance, animation } from "../utils/variables"
import ScrollToTop from "./ScrollTopButton"

const Layout = ({ children, location, posts }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata.title}
        location={location}
        posts={posts}
      />

      <main
        style={{
          background: colors.ternary,
          margin: `0 auto`,
          maxWidth: appearance.headerWidth,
          padding: `${
            location.pathname === "/" || location.pathname === "/tags"
              ? "6rem 1rem"
              : "4rem 0"
          }`,
        }}
      >
        <ScrollToTop />
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
html{
  font-family: sans-serif;
}
body{
  background: ${colors.ternary};
  font-size: 62.5%;
}
a{
  font-weight: bold;
  color: ${colors.secondary};
  text-shadow: ${typography.shadowPrimary};
  transition: ${animation.transition.hover};

  &:hover{
    color: ${colors.primary};
    text-shadow: ${typography.shadowSecondary};
    text-decoration: none;
    transition: ${animation.transition.hover};
  }
}
h1, h2,h3,h4,h5,h6{
  font-weight: bold;
  color: ${colors.text};
  text-shadow: ${typography.shadowPrimary};

}
`

export default Layout
