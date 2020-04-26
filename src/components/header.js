import { Link } from "gatsby"
import React, { useState } from "react"

import { colors } from "../utils/variables"
import MenuIcon from "./menu-icon.js"
import { iconSolid } from "../utils/icons"
import SideNavbar from "./side-navbar"
import TagsDropdown from "./TagsDropdown"
import { getTags } from "../templates/all-tags-template"

const Header = ({ siteTitle, location, uniqueTags }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  let sideNavbar
  if (isSideMenuOpen) {
    sideNavbar = (
      <SideNavbar
        isSideMenuOpen={isSideMenuOpen}
        onCloseIcon={e => setIsSideMenuOpen(e)}
      />
    )
  }

  return (
    <header
      style={{
        background: `${colors.primary}`,
        marginBottom: `${location.pathname === "/" ? "1.45rem" : 0}`,
        position: "fixed",
        width: "100%",
        zIndex: 5,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          height: "4rem",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `${colors.text}`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        {/* <MenuIcon
          isSideMenuOpen={isSideMenuOpen}
          onMenuIcon={e => setIsSideMenuOpen(e)}
          />
        {sideNavbar} */}
        <TagsDropdown tagsArray={uniqueTags} />
      </div>
    </header>
  )
}

export default Header
