import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, appearance, typography } from '../utils/variables';
// import { iconCircle } from '../utils/icons';

const Footer = ({ siteTitle }) => (
  <MyFooter>
    <div className="container">
      <Link to="/">
        <h2>{siteTitle}</h2>
      </Link>
      {/* <div className="social-medias">
        {iconCircle('faFacebookF', 'secondary', { marginRight: '1rem' })}
        {iconCircle('faInstagram', 'secondary', { marginRight: '1rem' })}
        {iconCircle('faTwitter', 'secondary', { marginRight: '1rem' })}
      </div> */}
    </div>
  </MyFooter>
);

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

//* styled-component < 💅>
const MyFooter = styled.footer`
  background: ${colors.primary};
  padding: 2rem 2rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  .container {
    margin: 0 auto;
    max-width: ${appearance.headerWidth}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    h2 {
      margin: 0;
      color: ${colors.secondary};
      text-shadow: ${typography.shadowTernary};
      &:hover {
        color: ${colors.ternary};
        text-shadow: ${typography.shadowSecondary};
      }
    }
  }
`;

export default Footer;
