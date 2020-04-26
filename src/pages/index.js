import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => {
  const posts = data.posts.nodes

  // console.log(posts)

  return (
    <Layout location={location} posts={posts}>
      <SEO title="Home" />
      {posts.map((post, i) => (
        <PostCard
          key={post.id}
          title={post.title}
          id={post.id}
          slug={post.slug}
          tags={post.tags}
          thumbnail={post.thumbnail}
          description={post.description}
          createdAt={post.createdAt}
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
        createdAt(formatString: "DD MMMM YYYY")
        thumbnail {
          id
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
