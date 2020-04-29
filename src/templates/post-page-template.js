import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
// others
import styled from "styled-components"
import _ from "lodash"
import Badge from "../components/Badge"
import Layout from "../components/layout"
import { colors, typography, appearance } from "../utils/variables"
import { iconCircle, iconSolid } from "../utils/icons"
// contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

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

const PostPage = ({ data, location, pageContext }) => {
  const post = data.contentfulBlogPost
  const { posts } = pageContext
  return (
    <Wrap>
      <Layout location={location} posts={posts}>
        {/************** COVER IMAGE **************/}
        <Img
          className="hero"
          fluid={post.thumbnail.fluid}
          style={{ height: "40rem" }}
        />
        {/************** SUB--HEADER **************/}
        <div className="sub-header">
          <div className="sub-header--date">
            {iconSolid("faClock")}
            <small>{post.createdAt}</small>
          </div>

          <div className="socials">
            {iconCircle("faShareAlt", "primary", { marginLeft: "1rem" })}
            {iconCircle("faFacebookF", "primary", { marginLeft: "1rem" })}
            {iconCircle("faWhatsapp", "primary", { marginLeft: "1rem" })}
            {iconCircle("faTwitter", "primary", { marginLeft: "1rem" })}
          </div>
        </div>
        {/************** TAGS **************/}
        <div className="tags">
          {post.tags.map((tag, index) => (
            <Badge
              to={`/tags/${_.kebabCase(tag)}`}
              theme="primary"
              key={index}
              tag={tag}
            >
              {`#${tag}`}
            </Badge>
          ))}
        </div>
        {/************** MAIN **************/}
        <article className="main-content">
          {/************** TITLE **************/}
          <h1 className="title">{post.title}</h1>
          <p className="description">{post.description}</p>
          {/************** PREPARATION INFO **************/}
          <div className="prep-info-wrapper">
            <div className="prep-info">
              <h5 className="prep-info--title">
                {iconSolid("faSignal", { margin: "0 .5rem" })}
                Level
              </h5>
              <small className="prep-info--text">{post.difficulty}</small>
            </div>
            <div className="prep-info">
              <h5 className="prep-info--title">
                {iconSolid("faUtensilSpoon", { margin: "0 .5rem" })}
                Prep
              </h5>
              <small className="prep-info--text">{post.prepTime} mins</small>
            </div>
            <div className="prep-info">
              <h5 className="prep-info--title">
                {iconSolid("faFire", { margin: "0 .5rem" })}
                Cook
              </h5>
              <small className="prep-info--text">{post.cookTime} mins</small>
            </div>
            <div className="prep-info">
              <h5 className="prep-info--title">
                {iconSolid("faUserFriends", { margin: "0 .5rem" })}
                Serves
              </h5>
              <small className="prep-info--text">{post.serves} people</small>
            </div>
          </div>
          {/************** INGREDIENTS **************/}
          <h2>Ingredients:</h2>
          <ul
            style={{
              marginLeft: 0,
              columns: post.ingredients.length <= 5 ? 1 : 2,
            }}
          >
            {post.ingredients.map((ingredient, index) => (
              <li
                key={index}
                style={{
                  listStylePosition: "inside",
                }}
              >
                {ingredient}
              </li>
            ))}
          </ul>
          {/************** POST BODY **************/}
          <div>
            {documentToReactComponents(post.body.json, {
              renderNode: {
                [BLOCKS.HR]: (node, children) => (
                  <hr
                    style={{
                      height: 3,
                      background: colors.secondary,
                      boxShadow: `${typography.shadowPrimary}`,
                    }}
                  />
                ),
                [BLOCKS.EMBEDDED_ASSET]: (node, children) =>
                  node.data.target.fields === undefined ? (
                    <div></div>
                  ) : (
                    <picture>
                      <source
                        srcSet={`${node.data.target.fields.file["en-US"].url}?w=${appearance.articleWidth}&h=500&fit=thumb&f=top&fl=progressive&fm=webp`}
                        type="image / webp"
                        media="(width: 1900px)"
                        alt={node.data.target.fields.title["en-US"]}
                      />
                      <img
                        src={`${node.data.target.fields.file["en-US"].url}?w=${appearance.articleWidth}&h=500&fit=fill&f=center&fl=progressive`}
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
    position: sticky;
    top: 8rem;
    background: ${colors.secondary};
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    &--date {
      display: flex;
      align-items: center;
      font-size: 2rem;
      color: ${colors.primary};
      small {
        margin-left: 1rem;
        font-size: 1.5rem;
      }
    }
  }
  .tags {
    display: flex;
    padding: 0 2rem;
  }
  .socials {
    display: flex;
  }
  article {
    margin: auto;
    width: ${appearance.articleWidth};
    .prep-info-wrapper {
      background-color: ${colors.primary};
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1.5rem 0;
      margin-bottom: 1rem;
      .prep-info {
        width: 20%;
        text-align: center;
        &--title {
          margin-bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        &--text {
          color: ${colors.secondary};
        }
      }
    }
    .ingredient.odd {
      list-style: none;
    }
    ul {
      padding-left: 2rem;
      margin-bottom: 1.5rem;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      padding: 0 2rem;
    }
  }
  img {
    width: 100%;
    margin: 2rem 0;
  }
`

export default PostPage
