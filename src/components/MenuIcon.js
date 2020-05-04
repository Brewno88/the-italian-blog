import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { iconSolid } from '../utils/icons';

const MenuIcon = ({ isSideMenuOpen }) => {
  const onMenuIcon = () => onMenuIcon(!isSideMenuOpen);
  return (
    <Wrap onClick={onMenuIcon}>
      {isSideMenuOpen
        ? iconSolid('faTimes', {
            transform: 'scale(1.5)',
          })
        : iconSolid('faBars', {
            transform: 'scale(1.5)',
          })}
    </Wrap>
  );
};

MenuIcon.propTypes = {
  isSideMenuOpen: PropTypes.string.isRequired,
};

//* styled-component < 💅>
const Wrap = styled.div`
  cursor: pointer;
  z-index: 3;
`;

export default MenuIcon;
