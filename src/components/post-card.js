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
    <Article>
      <Img className="thumbnail" fluid={thumbnail.fluid} />
      <h2>
        <Link to={`/${slug}`}>{title}</Link>
      </h2>
      <small>{createdAt}</small>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li className="tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <Link to={`/${slug}`}>Read More...</Link>
    </Article>
  )
}

//* styled-component < 💅>
const Article = styled.div`
  height: 30rem;
  .thumbnail {
    height: 33%;
  }
`

export default PostCard
