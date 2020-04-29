import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, animation } from "../utils/variables"
import _ from "lodash"

const Badge = ({ children, to, theme, size }) => {
  return (
    <MyBadge to={to} theme={theme} size={size}>
      {children}
    </MyBadge>
  )
}

//* styled-component < 💅>
const MyBadge = styled(Link)`
  display: flex;
  font-weight: bold;
  font-size: 1.3rem;
  color: ${props =>
    props.theme === "primary" ? colors.secondary : colors.primary};
  background: ${props =>
    props.theme === "primary" ? colors.primary : colors.secondary};
  padding: 0.4rem 0.7rem;
  border: none;
  margin-right: 1rem;
  border-radius: 3rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  transition: ${animation.transition.hover};
  text-shadow: none;
  &:hover {
    color: ${props =>
      props.theme === "primary" ? colors.primary : colors.secondary};
    background: ${props =>
      props.theme === "primary" ? colors.secondary : colors.primary};
    text-shadow: none;
    transition: ${animation.transition.hover};
  }
`

export default Badge
