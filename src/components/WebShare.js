import React, { useState } from 'react';

import { ShareButtons } from './ShareButtons';
import { iconCircle } from '../utils/icons';

export const WebShare = ({ location, post }) => {
  // Chrome Desktop has navigator.share but sometimes can't comunicate
  const [shareError, setShareError] = useState(false);

  const shareButton = shareError ? (
    <ShareButtons location={location} post={post} />
  ) : (
    iconCircle('faShareAlt', 'primary')
  );

  const onShareButton = () => {
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
      .catch((error) => (error.message !== 'Abort due to cancellation of share.'
        ? setShareError(true)
        : setShareError(false)));
  };
  return shareError ? (
    <ShareButtons location={location} post={post} />
  ) : (
    <div
      style={{ display: shareError ? 'none' : 'block' }}
      className="webShare"
      onClick={onShareButton}
      onKeyDown={onShareButton}
    >
      {shareButton}
    </div>
  );
};
