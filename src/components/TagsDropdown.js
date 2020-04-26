import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { iconSolid } from "../utils/icons"
import { colors } from "../utils/variables"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownItem from "react-bootstrap/DropdownItem"
import DropdownToggle from "react-bootstrap/DropdownToggle"
import DropdownMenu from "react-bootstrap/DropdownMenu"

const TagsDropdown = ({ tagsArray }) => {
  return (
    <Wrap>
      <DropdownToggle>Tags</DropdownToggle>
      <DropdownMenu>
        {tagsArray.map(tag => (
          <Link to={`/tags/${tag}`}>{tag}</Link>
        ))}
      </DropdownMenu>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled(Dropdown)`
  /* cursor: pointer;
  color: ${colors.background};
  background: ${colors.secondary};
  border-radius: 0.3rem;
  padding: 0 0.4rem; */
  .dropdown-toggle{
    background: ${colors.secondary};
    border: none;
    padding: .2rem .4rem;
    &:hover, &:active{
    background: ${colors.secondary} !important;
    border-color: ${colors.secondary} !important;
    border: none;
    }
    &:focus{
      color: ${colors.primary};
      background: ${colors.secondary};
      border: none;
      box-shadow: 0 0 0 .2rem ${colors.text};
    }
  }
  .dropdown-menu{
    background: ${colors.secondary};
    }
    a{
      color: ${colors.primary};
      display: block;
      padding: .5rem 1rem;

      &:hover{
        text-decoration: none;
        background: ${colors.primary};
        color: ${colors.secondary};
      }
    }

`

export default TagsDropdown
