import React from "react"
import styled from "styled-components"
import { colors } from "../utils/variables"

const Tag = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

//* styled-component < 💅>
const Wrap = styled.h6`
  display: inline;
  font-size: 0.7rem;
  margin: 0 0.2rem;
  font-weight: bold;
  background: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 3rem;
  padding: 0.4rem;
  cursor: pointer;
  align-self: center;
`

export default Tag
