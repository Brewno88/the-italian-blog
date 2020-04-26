// const slugify = function (text) {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, "-") // Replace spaces with -
//     .replace(/[^\w-]+/g, "") // Remove all non-word chars
//     .replace(/--+/g, "-") // Replace multiple - with single -
//     .replace(/^-+/, "") // Trim - from start of text
//     .replace(/-+$/, "") // Trim - from end of text
// }

// module.exports = { slugify }

//***** CREATE ARRAY WITH ALL TAGS *******//
const getUniqueTags = function (obj) {
  let allTags = []

  obj.forEach(post => {
    if (post.tags) {
      return (allTags = [...allTags, ...post.tags])
    }
  })
  // allTag have  duplicate so only create array with unique tags
  let uniqueTags = [...new Set(allTags)]
  return uniqueTags
}

module.exports = { getUniqueTags }
