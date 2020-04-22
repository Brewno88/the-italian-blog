import React from "react"

import styled from "styled-components"
import { colors } from "../utils/variables"
// Font-Awesome
import {
  faWhatsapp,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faShareAlt,
  faSignal,
  faUtensilSpoon,
  faFire,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons"

const Circle = styled.span`
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 5rem;
  margin-left: 0.3rem;

  .icon {
    font-size: 1.5rem;
    margin: auto;
  }
  &.primary {
    background-color: ${colors.primary};

    .icon {
      color: ${colors.secondary};
    }
  }

  &.secondary {
    background-color: ${colors.secondary};

    .icon {
      color: ${colors.primary};
    }
  }
`

const primary = {
  color: colors.primary,
  marginRight: ".3rem",
}
const secondary = {
  color: colors.secondary,
  marginRight: ".3rem",
}

export const iconCircle = (icon, color) => {
  icon === "faFacebookF"
    ? (icon = faFacebookF)
    : icon === "faTwitter"
    ? (icon = faTwitter)
    : icon === "faWhatsapp"
    ? (icon = faWhatsapp)
    : icon === "faInstagram"
    ? (icon = faInstagram)
    : (icon = "faShareAlt")
    ? (icon = faShareAlt)
    : (icon = null)

  return (
    <Circle className={color}>
      <FontAwesomeIcon icon={icon} className="icon" />
    </Circle>
  )
}
export const iconSolid = (icon, color) => {
  icon === "clock"
    ? (icon = faClock)
    : icon === "faSignal"
    ? (icon = faSignal)
    : icon === "faUtensilSpoon"
    ? (icon = faUtensilSpoon)
    : icon === "faFire"
    ? (icon = faFire)
    : icon === "faUserFriends"
    ? (icon = faUserFriends)
    : (icon = null)
  color === "secondary" ? (color = secondary) : (color = primary)
  return <FontAwesomeIcon icon={icon} style={color} />
}
