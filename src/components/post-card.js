import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const PostCard = ({
  id,
  title,
  tags,
  slug,
  description,
  createdAt,
  thumbnail,
}) => {
  return (
    <Article style={{ width: "20rem" }}>
      <Img sizes={thumbnail.sizes}></Img>
      <h2>
        <Link to={`/${slug}`}>{title}</Link>
      </h2>
      <small>{createdAt}</small>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <Link to={`/${slug}`}>Read More...</Link>
    </Article>
  )
}

//* styled-component < 💅>
const Article = styled.div``

export default PostCard
