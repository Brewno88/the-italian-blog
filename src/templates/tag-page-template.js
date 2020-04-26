import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import TagCard from "../components/TagCard"
import _ from "lodash"
import PostCard from "../components/post-card"

export const query = graphql`
  query($tag: String!) {
    allContentfulBlogPost(filter: { tags: { eq: $tag } }) {
      nodes {
        id
        title
        description
        createdAt(formatString: "DD MMM YYYY")
        tags
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
  }
`

const TagPage = ({ data, location, pageContext }) => {
  const tagPosts = data.allContentfulBlogPost.nodes
  const { tag, posts } = pageContext

  return (
    <Wrap>
      <Layout location={location} posts={posts}>
        {tagPosts.map((post, index) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              id={post.id}
              slug={`${_.kebabCase(post.title)}`}
              tags={post.tags}
              thumbnail={post.thumbnail}
              description={post.description}
              createdAt={post.createdAt}
            />
            // <TagCard
            //   key={post.id}
            //   title={post.title}
            //   id={post.id}
            //   slug={`${_.kebabCase(post.title)}`}
            //   tags={post.tags}
            //   thumbnail={post.thumbnail}
            //   description={post.description}
            //   createdAt={post.createdAt}
            // />
          )
        })}
      </Layout>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div``

export default TagPage
