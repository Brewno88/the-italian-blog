import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { colors } from "../utils/variables"

import Badge from "./Badge"

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
    <Article className="card">
      <Img
        className="thumbnail"
        fluid={thumbnail.fluid}
        style={{ borderRadius: ".8rem .8rem 0 0" }}
      />
      <div className="information">
        <h2 className="title">
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <small className="date">{createdAt}</small>
        <p className="description">{description}</p>
        <div className="bottom">
          <div className="tags">
            {tags.map((tag, index) => (
              <Badge
                theme="primary"
                size="md"
                key={index}
                tag={tag}
              >{`#${tag}`}</Badge>
            ))}
          </div>
          <Link className="read-more" to={`/${slug}`}>
            <Badge size="bg" theme="secondary" className="">
              Read more...
            </Badge>
          </Link>
        </div>
      </div>
    </Article>
  )
}

//* styled-component < 💅>
const Article = styled.div`
  margin: 0 1rem 2rem 1rem;
  border: solid 3px ${colors.secondary};
  border-radius: 1rem;
  z-index: 2;
  .thumbnail {
    height: 15rem;
  }
  .information {
    padding: 1rem 1rem 1rem 1rem;
    .title {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      a {
        color: ${colors.secondary};
        &:hover {
          color: ${colors.primary};
        }
      }
    }
    .date {
      font-style: italic;
      margin-bottom: 1rem;
      font-size: 0.7rem;
    }
    .description {
      margin-top: 0.5rem;
      font-size: 1rem;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .tags {
        display: flex;
      }
    }
  }
`

export default PostCard
