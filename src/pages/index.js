import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Posts</h1>
      {posts.map((post, i) => (
        <PostCard
          key={post.slug}
          title={post.title}
          id={post.id}
          slug={post.slug}
          tags={post.tags}
          thumbnail={post.thumbnail}
          description={post.description}
          createdAt={post.created}
        />
      ))}
    </Layout>
  )
}

export const getPosts = graphql`
  {
    posts: allContentfulBlogPost(sort: { order: DESC, fields: createdAt }) {
      nodes {
        id
        title
        tags
        slug
        description
        createdAt(formatString: "DD MMMM 'YY")
        thumbnail {
          id
          sizes(toFormat: WEBP) {
            ...GatsbyContentfulSizes_tracedSVG
          }
        }
      }
    }
  }
`

export default IndexPage
