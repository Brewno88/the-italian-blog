import { Link } from "gatsby"
import React from "react"

import { colors } from "../utils/variables"

const Header = ({ siteTitle, location }) => {
  return (
    <header
      style={{
        background: `${colors.primary}`,
        marginBottom: `${location.pathname === "/" ? "1.45rem" : 0}`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `${colors.background}`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
