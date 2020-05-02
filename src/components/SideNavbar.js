import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/variables';
import { iconCircle } from '../utils/icons';

const SideNavbar = () => (
  <Wrap>
    <div className="icons">
      {iconCircle('faFacebookF', 'secondary')}
      {iconCircle('faInstagram', 'secondary')}
      {iconCircle('faTwitter', 'secondary')}
    </div>
  </Wrap>
);

//* styled-component < 💅>
const Wrap = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${colors.primary};
  .icons {
    position: fixed;
    bottom: 1rem;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default SideNavbar;
