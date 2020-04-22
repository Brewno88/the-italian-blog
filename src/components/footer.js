import React from "react"
import styled from "styled-components"
import { colors } from "../utils/variables"

const Footer = ({ siteTitle }) => {
  return (
    <Wrap>
      <p>{siteTitle}</p>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div``

export default Footer
