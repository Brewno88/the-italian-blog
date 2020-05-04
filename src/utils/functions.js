// //***** CREATE OBJECT THAT COUNT EACH TAG *******//
export const countTags = posts => {
  const tagCounts = {};
  posts.map(post =>
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }),
  );
  return tagCounts;
};

export const sortTags = notSortTags => {
  const sort = Object.entries(notSortTags).sort((a, b) => b[1] - a[1]);
  return sort;
};

export const getUniqueTags = tagsObj => {
  const uniqueTags = Object.keys(tagsObj);

  return uniqueTags;
};
