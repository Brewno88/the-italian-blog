import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// others
import styled from "styled-components"
import { colors } from "../utils/variables"
import Tag from "../components/tag"
// contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
// Font-Awesome
import {
  faWhatsapp,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faShareAlt,
  faSignal,
  faUtensilSpoon,
  faFire,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      description
      createdAt(formatString: "DD MMM YYYY")
      ingredients
      tags
      difficulty
      prepTime
      serves
      cookTime
      body {
        json
      }
      author {
        twitter
        instagram
        name
        profilePicture {
          id
        }
      }
      thumbnail {
        id
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const PostPage = ({ data, location }) => {
  const post = data.contentfulBlogPost
  return (
    <Wrap>
      <Layout location={location}>
        {/************** COVER IMAGE **************/}
        <Img
          className="hero"
          fluid={post.thumbnail.fluid}
          style={{ height: "20rem" }}
        />
        {/************** SUB--HEADER **************/}
        <div className="sub-header">
          <div className="sub-header--date">
            <FontAwesomeIcon icon={faClock} className="sub-header--icon" />
            <small>{post.createdAt}</small>
          </div>

          <div className="socials">
            <span className="icon-wrapper">
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
            </span>

            <span className="icon-wrapper">
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </span>

            <span className="icon-wrapper">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </span>

            <span className="icon-wrapper">
              <FontAwesomeIcon icon={faShareAlt} className="icon" />
            </span>
          </div>
        </div>
        {/************** MAIN **************/}
        <article className="main-content">
          {/************** TAGS **************/}
          <div className="tags">
            {post.tags.map((tag, index) => (
              <Tag key={index}>{`#${tag}`}</Tag>
            ))}
          </div>
          {/************** TITLE **************/}
          <h1 className="title">{post.title}</h1>
          {/************** PREPARATION INFO **************/}
          <div className="prep-info-wrapper">
            <div className="prep-info">
              <h4 className="prep-info--title">Level</h4>
              <FontAwesomeIcon icon={faSignal} className="prep-info--icon" />
              <small className="prep-info--text">{post.difficulty}</small>
            </div>
            <div className="prep-info">
              <h4 className="prep-info--title">Prep</h4>
              <FontAwesomeIcon
                icon={faUtensilSpoon}
                className="prep-info--icon"
              />
              <small className="prep-info--text">{post.prepTime} mins</small>
            </div>
            <div className="prep-info">
              <h4 className="prep-info--title">Cook</h4>
              <FontAwesomeIcon icon={faFire} className="prep-info--icon" />
              <small className="prep-info--text">{post.cookTime} mins</small>
            </div>
            <div className="prep-info">
              <h4 className="prep-info--title">Serving</h4>
              <FontAwesomeIcon
                icon={faUserFriends}
                className="prep-info--icon"
              />
              <small className="prep-info--text">{post.serves} people</small>
            </div>
          </div>
          {/************** POST BODY **************/}
          <div>
            {documentToReactComponents(post.body.json, {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node, children) =>
                  node.data.target.fields === undefined ? (
                    <div></div>
                  ) : (
                    <picture>
                      <source
                        srcSet={`${node.data.target.fields.file["en-US"].url}?w=600&h=300&fit=thumb&f=center&fl=progressive&fm=webp`}
                        type="image / webp"
                        media="(width: 1900px)"
                        alt={node.data.target.fields.title["en-US"]}
                      />
                      <img
                        src={`${node.data.target.fields.file["en-US"].url}?w=600&h=300&fit=thumb&f=center&fl=progressive&f=center`}
                        alt={node.data.target.fields.title["en-US"]}
                      />
                    </picture>
                  ),
              },
            })}
          </div>
        </article>
      </Layout>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div`
  .sub-header {
    background: ${colors.secondary};
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    &--date {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      color: ${colors.primary};
      small {
        margin-left: 0.3rem;
      }
    }
  }
  .socials {
    display: flex;
    .icon-wrapper {
      display: flex;
      width: 2.2rem;
      height: 2.2rem;
      background-color: ${colors.primary};
      border-radius: 5rem;
      margin-left: 0.3rem;

      .icon {
        font-size: 1.5rem;
        color: ${colors.secondary};
        margin: auto;
      }
    }
  }
  article {
    padding: 0 1rem;
    .title {
      margin-top: 1rem;
    }
    .prep-info-wrapper {
      background-color: ${colors.primary};
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.5rem 0;
      .prep-info {
        width: 20%;
        &--title {
          margin-bottom: 0.5rem;
        }
        &--icon {
          margin-right: 0.5rem;
        }
        &--icon,
        &--text {
          color: ${colors.secondary};
        }
      }
    }
  }
`

export default PostPage
