import React from "react"
import { Link, graphql } from "gatsby"
import TagCard from "../components/tag-card"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const getTags = graphql`
  {
    tags: allContentfulBlogPost {
      nodes {
        tags
      }
    }
  }
`

const SecondPage = ({ data, location, pageContext }) => {
  const allPosts = data.tags.nodes
  const { uniqueTags, tagCounts } = pageContext

  return (
    <Layout location={location}>
      <SEO title="Tags" />
      {uniqueTags.map((tag, index) => (
        <TagCard key={index} tag={tag}>
          {tag}
        </TagCard>
      ))}
    </Layout>
  )
}

export default SecondPage
