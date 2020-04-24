import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const TagCard = ({ data, tag, children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulBlogPost(filter: { tags: { eq: "vegetarian" } }) {
            nodes {
              tags
              thumbnail {
                fluid {
                  srcWebp
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Wrap>
          <h2>{children}</h2>
        </Wrap>
      )}
    />
  )
}

//* styled-component < 💅>
const Wrap = styled.div``

export default TagCard
