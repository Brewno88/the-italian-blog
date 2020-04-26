import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./global.css"
import { getUniqueTags } from "../utils/functions"

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

  //***** CREATE ARRAY WITH UNIQUE TAGS *******//
  let uniqueTags = getUniqueTags(posts)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        location={location}
        // posts={posts}
        uniqueTags={uniqueTags}
      />

      <main
        style={{
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
