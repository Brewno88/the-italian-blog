import React, { useState } from 'react';
import styled from 'styled-components';
import { iconSolid } from '../utils/icons';

const MenuIcon = ({ ...props }) => {
  const onMenuIcon = () => props.onMenuIcon(!props.isSideMenuOpen);
  return (
    <Wrap onClick={onMenuIcon}>
      {props.isSideMenuOpen
        ? iconSolid('faTimes', {
          transform: 'scale(1.5)',
        })
        : iconSolid('faBars', {
          transform: 'scale(1.5)',
        })}
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  cursor: pointer;
  z-index: 3;
`;

export default MenuIcon;
