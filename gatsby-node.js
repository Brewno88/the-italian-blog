const { getUniqueTags } = require("./src/utils/functions")

const _ = require("lodash")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
          tags
        }
      }
    }
  `)

  const templates = {
    postPage: "./src/templates/post-page-template.js",
    allTags: "./src/templates/all-tags-template.js",
    tagPage: "./src/templates/tag-page-template.js",
  }

  const posts = result.data.allContentfulBlogPost.nodes
  if (result.errors) {
    reporter.panic("Error loading lesson", JSON.stringify(result.errors))
  }
  //***** CREATE ARRAY WITH UNIQUE TAGS *******//
  let uniqueTags = getUniqueTags(posts)

  //* CREATE SINGLE POST PAGE
  posts.forEach(post => {
    actions.createPage({
      path: `/${post.slug}/`,
      component: require.resolve(templates.postPage),
      context: {
        slug: post.slug,
        // uniqueTags,
        posts,
      },
    })
  })

  // //***** CREATE OBJECT THAT COUNT EACH TAG *******//
  let tagCounts = {}
  posts.map(post =>
    post.tags.forEach(tag => (tagCounts[tag] = (tagCounts[tag] || 0) + 1))
  )
  uniqueTags.forEach(tag => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: require.resolve(templates.tagPage),
      context: {
        tag,
        // uniqueTags,
        posts,
      },
    })
  })
  // Create Tags Page
  actions.createPage({
    path: `/tags/`,
    component: require.resolve(templates.allTags),
    context: {
      uniqueTags,
      tagCounts,
      posts,
    },
  })
}
