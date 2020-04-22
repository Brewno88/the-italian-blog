/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./global.css"

const Layout = ({ children, location }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `${location.pathname === "/" ? "0 1.0875rem 1.45rem" : 0}`,
        }}
      >
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  )
}

export default Layout
