import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { iconCircle } from '../utils/icons';

export const ShareButtons = ({ location, post }) => (
  <div className="socials">
    <FacebookShareButton url={location.href} quote={post.title}>
      {iconCircle('faFacebookF', 'primary', {
        marginLeft: '1rem',
      })}
    </FacebookShareButton>
    <WhatsappShareButton url={location.href}>
      {iconCircle('faWhatsapp', 'primary', {
        marginLeft: '1rem',
      })}
    </WhatsappShareButton>
    <TwitterShareButton url={location.href}>
      {iconCircle('faTwitter', 'primary', {
        marginLeft: '1rem',
      })}
    </TwitterShareButton>
  </div>
);
