import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { colors } from "../utils/variables"

const PostCard = ({
  id,
  title,
  tags,
  slug,
  description,
  createdAt,
  thumbnail,
}) => {
  console.log(colors)
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
              <h6 className="tag" key={index}>
                {`#${tag}`}
              </h6>
            ))}
          </div>
          <Link className="read-more" to={`/${slug}`}>
            <button className="btn">Read More...</button>
          </Link>
        </div>
      </div>
    </Article>
  )
}

//* styled-component < 💅>
const Article = styled.div`
  margin-bottom: 2rem;
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
        color: ${colors.text};
        text-decoration: none;
      }
    }
    .date {
      font-style: italic;
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
        .tag {
          list-style: none;
          font-size: 0.7rem;
          margin: 0 0.2rem;
          background: ${colors.primary};
          color: ${colors.secondary};
          border-radius: 3rem;
          padding: 0.4rem;
          cursor: pointer;
          align-self: center;
        }
      }
      .btn {
        color: ${colors.background};
        background: ${colors.secondary};
        cursor: pointer;
        border-radius: 6rem;
        border: none;
        padding: 0.2rem 0.3rem;
        font-size: 0.7rem;
        font-weight: bold;
      }
    }
  }
`

export default PostCard
