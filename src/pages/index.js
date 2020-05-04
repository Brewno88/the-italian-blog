import React from 'react';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';

import Layout from '../components/layout';
import PostCard from '../components/PostCard';
import SEO from '../components/seo';

const IndexPage = ({ data, location }) => {
  const posts = data.posts.nodes;

  // console.log(posts)

  return (
    <Layout location={location} posts={posts}>
      <SEO title="Home" />
      {posts.map(post => (
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
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

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
`;

export default IndexPage;
