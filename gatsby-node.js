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

  //* CREATE SINGLE POST PAGE
  posts.forEach(post => {
    actions.createPage({
      path: `/${post.slug}/`,
      component: require.resolve(templates.postPage),
      context: {
        slug: post.slug,
      },
    })
  })

  //***** CREATE ARRAY WITH ALL TAGS *******//
  let allTags = []
  posts.forEach(post => {
    if (post.tags) {
      return (allTags = [...allTags, ...post.tags])
    }
  })
  // allTag have  duplicate so only create array with unique tags
  let uniqueTags = [...new Set(allTags)]

  // //***** CREATE OBJECT THAT COUNT EACH TAG *******//
  let tagCounts = {}
  posts.map(post =>
    post.tags.forEach(tag => (tagCounts[tag] = (tagCounts[tag] || 0) + 1))
  )
  uniqueTags.forEach(tag => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: require.resolve(templates.tagPage),
      context: { tag },
    })
  })
  // Create Tags Page
  actions.createPage({
    path: `/tags/`,
    component: require.resolve(templates.allTags),
    context: { uniqueTags, tagCounts },
  })
}
