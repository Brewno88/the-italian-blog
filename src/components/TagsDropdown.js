import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../utils/variables"
import Dropdown from "react-bootstrap/Dropdown"
import { countTags, sortTags } from "../utils/functions"

const TagsDropdown = ({ posts }) => {
  // //***** CREATE OBJECT THAT COUNT EACH TAG *******//
  let tagCounts = countTags(posts)

  //***** CREATE ARRAY WITH UNIQUE TAGS *******//
  let sortedTags = sortTags(tagCounts)

  return (
    <Wrap>
      <Dropdown.Toggle>Tags</Dropdown.Toggle>
      <Dropdown.Menu>
        {sortedTags.map((tag, index) => (
          <Link key={index} to={`/tags/${tag[0]}`}>
            {tag[0]}: {tag[1]}
          </Link>
        ))}
      </Dropdown.Menu>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled(Dropdown)`
  .dropdown-toggle.btn.btn-primary {
    color: ${colors.ternary};
    background: ${colors.secondary};
    border: none;
    padding: 0.2rem 0.44rem;
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
  }
  a {
    color: ${colors.primary};
    text-shadow: none;
    display: block;
    padding: 0.5rem 1rem;

    &:hover {
      text-decoration: none;
      background: ${colors.primary};
      color: ${colors.secondary};
      text-shadow: none;
    }
  }
`

export default TagsDropdown
