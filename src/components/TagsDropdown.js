import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { colors } from '../utils/variables';
import { countTags, sortTags } from '../utils/functions';

const TagsDropdown = ({ posts }) => {
  // //***** CREATE OBJECT THAT COUNT EACH TAG *******//
  const tagCounts = countTags(posts);

  //* **** CREATE ARRAY WITH UNIQUE TAGS *******//
  const sortedTags = sortTags(tagCounts);

  return (
    <Wrap>
      <Dropdown.Toggle>Tags</Dropdown.Toggle>
      <Dropdown.Menu>
        {sortedTags.map(tag => (
          <Link key={tag} to={`/tags/${tag[0]}`}>
            {tag[0]}:{tag[1]}
          </Link>
        ))}
      </Dropdown.Menu>
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled(Dropdown)`
  .dropdown-toggle.btn.btn-primary {
    color: ${colors.ternary};
    background: ${colors.secondary};
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 0.8rem;
    font-size: 2rem;

    &:hover,
    &:active {
      background: ${colors.secondary};
      border-color: ${colors.secondary};
      border: none;
    }
    &:focus {
      color: ${colors.primary};
      background: ${colors.secondary};
      border: none;
      box-shadow: 0 0 0 0.2rem ${colors.text};
    }
  }
  .dropdown-menu {
    background: ${colors.secondary};
    border-radius: 0.5rem;

    a {
      color: ${colors.primary};
      text-shadow: none;
      display: block;
      font-size: 2rem;
      transition: none;
      padding: 1rem 2rem;
      white-space: nowrap;
      &:hover {
        background: ${colors.primary};

        color: ${colors.secondary};
      }
    }
  }
`;

TagsDropdown.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TagsDropdown;
