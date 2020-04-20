exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading lesson", JSON.stringify(result.errors))
  }
  result.data.allContentfulBlogPost.nodes.forEach(post => {
    actions.createPage({
      path: `/${post.slug}/`,
      component: require.resolve("./src/templates/post-page-template.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
