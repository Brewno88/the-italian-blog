import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import ShareButtons from './ShareButtons';
import { iconCircle } from '../utils/icons';

const WebShare = ({ location, post }) => {
  // Chrome Desktop has navigator.share but sometimes can't communicate
  const [shareError, setShareError] = useState(false);

  const shareButton = shareError ? (
    <ShareButtons location={location} post={post} />
  ) : (
    iconCircle('faShareAlt', 'primary')
  );

  const onShareButton = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.description,
          url: location.href,
        })
        .then(() => {
          setShareError(false);
          return alert('Thanks for sharing');
        })
        .catch(error =>
          error.message === 'Abort due to cancellation of share.'
            ? setShareError(false)
            : setShareError(true),
        );
    }
  };
  return shareError ? (
    <ShareButtons location={location} post={post} />
  ) : (
    <div
      style={{ display: shareError ? 'none' : 'block' }}
      className="webShare"
      onClick={onShareButton}
      onKeyDown={onShareButton}
      role="link"
      tabIndex="0"
    >
      {shareButton}
    </div>
  );
};

WebShare.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WebShare;
