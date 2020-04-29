import React from "react"

import styled from "styled-components"
import { colors } from "./variables"
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
  faArrowUp,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

const Circle = styled.a`
  display: inline-flex;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 5rem;

  .icon {
    font-size: 2.3rem;
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
      color: ${colors.ternary};
    }
  }
`

export const iconCircle = (icon, variant, style) => {
  let socialLink
  let socialIcon

  switch (icon) {
    case "faFacebookF":
      socialIcon = faFacebookF
      socialLink = "https://www.facebook.com/"
      break
    case "faTwitter":
      socialIcon = faTwitter
      socialLink = "https://www.twitter.com/"
      break
    case "faWhatsapp":
      socialIcon = faWhatsapp
      socialLink = "https://www.whatsapp.com/"
      break
    case "faInstagram":
      socialIcon = faInstagram
      socialLink = "https://www.instagram.com/"
      break
    case "faArrowUp":
      socialIcon = faArrowUp
      break
    case "faShareAlt":
      socialIcon = faShareAlt
      break
    default:
      break
  }
  return (
    <Circle className={variant} style={style} href={socialLink} target="_blank">
      <FontAwesomeIcon icon={socialIcon} className="icon" />
    </Circle>
  )
}
export const iconSolid = (icon, style) => {
  switch (icon) {
    case "faClock":
      icon = faClock
      break
    case "faSignal":
      icon = faSignal
      break
    case "faUtensilSpoon":
      icon = faUtensilSpoon
      break
    case "faFire":
      icon = faFire
      break
    case "faUserFriends":
      icon = faUserFriends
      break
    case "faBars":
      icon = faBars
      break
    case "faTimes":
      icon = faTimes
      break
    default:
      break
  }
  // variant === "secondary" ? (variant = secondary) : (variant = primary)
  return <FontAwesomeIcon icon={icon} style={style} />
}
