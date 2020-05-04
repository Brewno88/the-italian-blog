import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { iconCircle } from '../utils/icons';

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0);

  const getScroll = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScroll);
  }, [scroll]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Wrap>
      <span
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
        role="link"
        tabIndex="0"
      >
        {iconCircle('faArrowUp', 'primary', {
          display: scroll > 500 ? 'flex' : 'none',
          width: '5rem',
          height: '5rem',
        })}
      </span>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  position: fixed;
  cursor: pointer;
  right: 2rem;
  bottom: 8rem;
  z-index: 3;
  &:hover {
    a {
      transform: translateY(-0.5rem);
    }
  }
  .icon {
    font-size: 3rem;
  }
`;

export default ScrollToTop;
