import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../utils/variables"
import { iconCircle } from "../utils/icons"

const Footer = ({ siteTitle }) => {
  return (
    <footer
      style={{
        background: `${colors.primary}`,
        padding: "1rem 1rem",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          position: "relative",
        }}
      >
        <h3 style={{ margin: " 0 0 1rem 0" }}>
          <Link
            to="/"
            style={{
              color: `${colors.text}`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h3>
        {iconCircle("faFacebookF", "secondary", { marginRight: ".5rem" })}
        {iconCircle("faInstagram", "secondary", { marginRight: ".5rem" })}
        {iconCircle("faTwitter", "secondary", { marginRight: ".5rem" })}
        {iconCircle("faArrowUp", "secondary", {
          position: "absolute",
          right: 0,
          top: "25%",
          transform: "scale(1.2)",
        })}
      </div>
    </footer>
  )
}

//* styled-component < 💅>
const Wrap = styled.div``

export default Footer
