import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, animation } from "../utils/variables"
import _ from "lodash"

const Badge = ({ children, tag, theme, size }) => {
  return (
    <MyBadge theme={theme} size={size}>
      {children}
    </MyBadge>
  )
}

//* styled-component < 💅>
const MyBadge = styled.button`
  background: ${props =>
    props.theme === "primary" ? colors.primary : colors.secondary};
  border: none;
  font-size: 0.8rem;
  margin-right: 0.3rem;
  font-weight: bold;
  border-radius: 3rem;
  padding: 0.4rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  transition: ${animation.transition.hover};
  a {
    color: ${props =>
      props.theme === "primary" ? colors.secondary : colors.primary};
    text-shadow: none;
    transition: ${animation.transition.hover};
  }
  &:hover {
    background: ${props =>
      props.theme === "primary" ? colors.secondary : colors.primary};
    transition: ${animation.transition.hover};

    a {
      color: ${props =>
        props.theme === "primary" ? colors.primary : colors.secondary};
      text-shadow: none;
      transition: ${animation.transition.hover};
    }
  }
`

export default Badge
