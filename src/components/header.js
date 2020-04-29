import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { colors, typography, appearance } from "../utils/variables"
// import SideNavbar from "./SideNavbar"
import TagsDropdown from "./TagsDropdown"

const Header = ({ siteTitle, location, posts }) => {
  // const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  // if (isSideMenuOpen) {
  //   let sideNavbar = (
  //     <SideNavbar
  //       isSideMenuOpen={isSideMenuOpen}
  //       onCloseIcon={e => setIsSideMenuOpen(e)}
  //     />
  //   )
  // }

  return (
    <MyHeader location={location}>
      <div className="header-content">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        {/* <MenuIcon
          isSideMenuOpen={isSideMenuOpen}
          onMenuIcon={e => setIsSideMenuOpen(e)}
          />
        {sideNavbar} */}
        <TagsDropdown posts={posts} />
      </div>
    </MyHeader>
  )
}

const MyHeader = styled.header`
  background: ${colors.primary};
  margin-bottom: ${props => (props.location.pathname === "/" ? "1.45rem" : 0)};
  position: fixed;
  width: 100%;
  z-index: 5;
  .header-content {
    margin: 0 auto;
    max-width: ${appearance.headerWidth}px;
    height: 4rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
    a {
      color: ${colors.secondary};
      text-shadow: ${typography.shadowTernary};
      &:hover {
        color: ${colors.ternary};
        text-shadow: ${typography.shadowSecondary};
      }
    }
  }
`

export default Header
