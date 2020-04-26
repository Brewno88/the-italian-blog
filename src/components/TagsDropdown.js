import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../utils/variables"
import Dropdown from "react-bootstrap/Dropdown"

const TagsDropdown = ({ tagsArray }) => {
  return (
    <Wrap>
      <Dropdown.Toggle>Tags</Dropdown.Toggle>
      <Dropdown.Menu>
        {tagsArray.map((tag, index) => (
          <Link key={index} to={`/tags/${tag}`}>
            {tag}
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
    display: block;
    padding: 0.5rem 1rem;

    &:hover {
      text-decoration: none;
      background: ${colors.primary};
      color: ${colors.secondary};
    }
  }
`

export default TagsDropdown
