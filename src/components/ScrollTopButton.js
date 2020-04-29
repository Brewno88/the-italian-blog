import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { iconCircle } from "../utils/icons"
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons"

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    window.addEventListener("scroll", getScroll)
  }, [scroll])

  const getScroll = () => {
    setScroll(window.pageYOffset)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Wrap>
      <span onClick={scrollToTop}>
        {iconCircle("faArrowUp", "primary", {
          display: scroll > 500 ? "flex" : "none",
          width: "3rem",
          height: "3rem",
        })}
      </span>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div`
  position: fixed;
  cursor: pointer;
  right: 1.5rem;
  bottom: 5rem;
  z-index: 3;
  &:hover {
    a {
      transform: translateY(-0.5rem);
    }
  }
  .icon {
    font-size: 2.3rem;
  }
`

export default ScrollToTop
