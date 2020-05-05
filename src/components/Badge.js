/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, animation } from '../utils/variables';

const Badge = ({ children, to, theme, size }) => (
  <MyBadge to={to} theme={theme} size={size}>
    {children}
  </MyBadge>
);

//* styled-component < 💅>
const MyBadge = styled(Link)`
  display: flex;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props =>
    props.theme === 'primary' ? colors.secondary : colors.primary};
  background: ${props =>
    props.theme === 'primary' ? colors.primary : colors.secondary};
  padding: 0.4rem 0.7rem 0;
  border: none;
  margin-right: 1rem;
  border-radius: 3rem;
  cursor: pointer;
  align-items: end;
  text-decoration: none;
  transition: ${animation.transition.hover};
  text-shadow: none;
  &:hover {
    color: ${props =>
      props.theme === 'primary' ? colors.primary : colors.secondary};
    background: ${props =>
      props.theme === 'primary' ? colors.secondary : colors.primary};
    text-shadow: none;
    transition: ${animation.transition.hover};
  }
`;

export default Badge;
