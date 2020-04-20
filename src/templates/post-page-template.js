import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      description
      createdAt(formatString: "DD-MM-YY")
      ingredients
      tags
      author {
        twitter
        instagram
        name
        profilePicture {
          id
        }
      }
    }
  }
`

const PostPage = ({ data }) => {
  const post = data.contentfulBlogPost
  return <Wrap>PostPage</Wrap>
}

//* styled-component < 💅>
const Wrap = styled.div``

export default PostPage
