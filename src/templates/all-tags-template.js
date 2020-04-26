import React from "react"
import { Link, graphql } from "gatsby"

import { colors } from "../utils/variables"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const getTags = graphql`
  {
    allContentfulBlogPost {
      nodes {
        tags
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        title
        description
      }
    }
  }
`

const SecondPage = ({ data, location, pageContext }) => {
  // const allPosts = data.allContentfulBlogPost.nodes
  const { uniqueTags, tagCounts, posts } = pageContext

  return (
    <Layout location={location} posts={posts}>
      <SEO title="Tags" />
      {uniqueTags.map((tag, index) => {
        return (
          <div
            style={{
              background: index % 2 === 0 ? colors.primary : colors.background,
              height: "20rem",
              marginBottom: "2rem",
              padding: "1rem 0",
            }}
            key={index}
          >
            <Link
              to={`/tags/${tag}`}
              style={{
                textDecoration: "none",
                color: colors.text,
              }}
            >
              <h2>
                {tag}: {tagCounts[tag]}
              </h2>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default SecondPage
