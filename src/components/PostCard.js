import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import _ from "lodash"
import { colors, appearance } from "../utils/variables"

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
        <Link to={`/${slug}`}>
          <h2 className="title">{title}</h2>
        </Link>
        <small className="date">{createdAt}</small>
        <p className="description">{description}</p>
        <div className="bottom">
          <div className="tags">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                to={`/tags/${_.kebabCase(tag)}`}
                theme="primary"
                size="md"
                tag={tag}
              >
                {`#${tag}`}
              </Badge>
            ))}
          </div>
          <Badge
            size="bg"
            theme="secondary"
            className="read-more"
            to={`/${slug}`}
          >
            Read more...
          </Badge>
        </div>
      </div>
    </Article>
  )
}

//* styled-component < 💅>
const Article = styled.div`
  margin: 2rem auto 0 auto;
  max-width: ${appearance.articleWidth}px;
  border: solid 3px ${colors.secondary};
  border-radius: 1rem;
  z-index: 2;
  @media (max-width: 770px) {
    margin: 2rem 2rem;
  }
  .thumbnail {
    height: 15rem;
  }
  .information {
    padding: 1rem 1rem 1rem 1rem;
    .title {
      margin-bottom: 0.5rem;
      a {
        color: ${colors.secondary};
        &:hover {
          color: ${colors.primary};
        }
      }
    }
    .date {
      margin-bottom: 1rem;
    }
    .description {
      margin-top: 0.5rem;
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
