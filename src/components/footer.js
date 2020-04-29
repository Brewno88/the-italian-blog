import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, appearance, typography } from "../utils/variables"
import { iconCircle } from "../utils/icons"

const Footer = ({ siteTitle }) => {
  return (
    <MyFooter>
      <div className="container">
        <h3>
          <Link to="/">{siteTitle}</Link>
        </h3>
        <div className="social-medias">
          {iconCircle("faFacebookF", "secondary", { marginRight: ".5rem" })}
          {iconCircle("faInstagram", "secondary", { marginRight: ".5rem" })}
          {iconCircle("faTwitter", "secondary", { marginRight: ".5rem" })}
        </div>
      </div>
    </MyFooter>
  )
}

//* styled-component < 💅>
const MyFooter = styled.footer`
  background: ${colors.primary};
  padding: 1rem 1rem;
  .container {
    margin: 0 auto;
    max-width: ${appearance.headerWidth}px;
    display: flex;
    align-items: center;
    padding: 0;
    h3 {
      margin: 0;
    }
    a {
      color: ${colors.secondary};
      text-shadow: ${typography.shadowTernary};
      &:hover {
        color: ${colors.ternary};
        text-shadow: ${typography.shadowSecondary};
      }
    }
  }
`

export default Footer
