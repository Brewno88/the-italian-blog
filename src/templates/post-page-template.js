import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// others
import styled from "styled-components"
// contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
// Font-Awesome
import {
  faWhatsapp,
  faFacebook,
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
        <Img
          className="cover-thumbnail"
          fluid={post.thumbnail.fluid}
          style={{ height: "20rem" }}
        />
        <div>
          <FontAwesomeIcon icon={faClock} />
          <small>{post.createdAt}</small>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faShareAlt} />
        </div>
        {post.tags.map((tag, index) => (
          <span key={index}>{`-${tag}`}</span>
        ))}
        <h1>{post.title}</h1>
        <div>
          <div className="prep-info">
            <h4>Level</h4>
            <FontAwesomeIcon icon={faSignal} />
            <small>{post.difficulty}</small>
          </div>
          <div className="prep-info">
            <h4>Prep</h4>
            <FontAwesomeIcon icon={faUtensilSpoon} />
            <small>{post.prepTime} mins</small>
          </div>
          <div className="prep-info">
            <h4>Cook</h4>
            <FontAwesomeIcon icon={faFire} />
            <small>{post.cookTime} mins</small>
          </div>
          <div className="prep-info">
            <h4>Serving</h4>
            <FontAwesomeIcon icon={faUserFriends} />
            <small>{post.serves} people</small>
          </div>
        </div>
        <div>
          {documentToReactComponents(post.body.json, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node, children) =>
                node.data.target.fields === undefined ? (
                  <div></div>
                ) : (
                  <picture>
                    <source
                      srcSet={`${node.data.target.fields.file["en-US"].url}?w=900&h=300&fit=thumb&f=center&fl=progressive&fm=webp`}
                      type="image / webp"
                      media="(width: 1900px)"
                      alt={node.data.target.fields.title["en-US"]}
                    />
                    <img
                      src={`${node.data.target.fields.file["en-US"].url}?w=900&h=300&fit=thumb&f=center&fl=progressive&f=center`}
                      alt={node.data.target.fields.title["en-US"]}
                    />
                  </picture>
                ),
            },
          })}
        </div>
      </Layout>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div``

export default PostPage
