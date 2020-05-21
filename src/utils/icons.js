import React from 'react';

import styled from 'styled-components';
// Font-Awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faWhatsapp,
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-solid-svg-icons';
import { colors } from './variables';

export const iconCircle = (icon, variant, style) => {
  config.autoAddCss = false;
  let socialLink;
  let socialIcon;

  switch (icon) {
    case 'faFacebookF':
      socialIcon = faFacebookF;
      // socialLink = "https://www.facebook.com/"
      break;
    case 'faTwitter':
      socialIcon = faTwitter;
      socialLink = 'https://www.twitter.com/';
      break;
    case 'faWhatsapp':
      socialIcon = faWhatsapp;
      socialLink = 'https://www.whatsapp.com/';
      break;
    case 'faInstagram':
      socialIcon = faInstagram;
      socialLink = 'https://www.instagram.com/';
      break;
    case 'faArrowUp':
      socialIcon = faArrowUp;
      break;
    case 'faShareAlt':
      socialIcon = faShareAlt;
      break;
    default:
      break;
  }
  return (
    <Circle
      className={`${variant} ${icon}`}
      style={style}
      href={socialLink}
      target="_blank"
      rel="noopener"
    >
      <FontAwesomeIcon icon={socialIcon} className="icon" />
    </Circle>
  );
};
export const iconSolid = (icon, style) => {
  let useIcon;
  switch (icon) {
    case 'faClock':
      useIcon = faClock;
      break;
    case 'faSignal':
      useIcon = faSignal;
      break;
    case 'faUtensilSpoon':
      useIcon = faUtensilSpoon;
      break;
    case 'faFire':
      useIcon = faFire;
      break;
    case 'faUserFriends':
      useIcon = faUserFriends;
      break;
    case 'faBars':
      useIcon = faBars;
      break;
    case 'faTimes':
      useIcon = faTimes;
      break;
    default:
      break;
  }
  // variant === "secondary" ? (variant = secondary) : (variant = primary)
  return <FontAwesomeIcon icon={useIcon} style={style} />;
};
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
`;
