import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const TagCard = ({ id, title, tag, slug, description, thumbnail }) => {
  return (
    <Wrap>
      <Link to={`/${slug}`}>
        <Img
          className="thumbnail"
          fluid={thumbnail.fluid}
          style={{
            borderRadius: ".8rem",
            width: "20rem",
            height: "100%",
          }}
        />
      </Link>
      <div
        style={{
          width: "15rem",
          background: "white",
          borderRadius: "1rem",
          position: "absolute",
          bottom: "1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: "auto", padding: "1rem" }}>{title}</h2>
      </div>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div`
  position: relative;
  width: 20rem;
  display: inline-flex;
  justify-content: center;
  height: 10rem;
`

export default TagCard
