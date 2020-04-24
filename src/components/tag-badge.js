import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../utils/variables"
import { slugify } from "../utils/slugify"

const Tag = ({ children, tag }) => {
  return <Wrap to={`/tag/${slugify(tag)}`}>{children}</Wrap>
}

//* styled-component < 💅>
const Wrap = styled(Link)`
  font-size: 0.7rem;
  margin: 0 0.2rem;
  font-weight: bold;
  background: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 3rem;
  padding: 0 0.4rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
`

export default Tag
