import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { colors, typography, appearance } from '../utils/variables';
import TagsDropdown from './TagsDropdown';

const Header = ({ siteTitle, location, posts }) => {
  return (
    <MyHeader location={location}>
      <div className="header-content">
        <Link to="/">
          <h1>{siteTitle}</h1>
        </Link>
        <TagsDropdown posts={posts} />
      </div>
    </MyHeader>
  );
};

const MyHeader = styled.header`
  background: ${colors.primary};
  margin-bottom: ${props => (props.location.pathname === '/' ? '1.45rem' : 0)};

  z-index: 5;
  padding: 2rem 2rem;
  .header-content {
    margin: 0 auto;
    max-width: ${appearance.headerWidth}px;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
    color: ${colors.secondary};
    text-shadow: ${typography.shadowTernary};
    &:hover {
      color: ${colors.ternary};
      text-shadow: ${typography.shadowSecondary};
    }
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Header;
