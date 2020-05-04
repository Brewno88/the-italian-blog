import React from 'react';
import { PropTypes } from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { iconCircle } from '../utils/icons';

const ShareButtons = ({ location, post }) => (
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

ShareButtons.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ShareButtons;
