import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./global.css"
import { colors } from "../utils/variables"

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
      <Header
        siteTitle={data.site.siteMetadata.title}
        location={location}
        posts={posts}
      />

      <main
        style={{
          background: colors.ternary,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `${
            location.pathname === "/" || location.pathname === "/tags"
              ? "6rem 1rem"
              : "4rem 0"
          }`,
        }}
      >
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
