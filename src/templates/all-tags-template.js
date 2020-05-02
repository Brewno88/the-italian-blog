import React from 'react';
import { Link } from 'gatsby';

import { colors } from '../utils/variables';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { countTags, sortTags } from '../utils/functions';

const SecondPage = ({ location, pageContext }) => {
  const { posts } = pageContext;

  const countedTags = countTags(posts);
  const sortedTags = sortTags(countedTags);

  return (
    <Layout location={location} posts={posts}>
      <SEO title="Tags" />
      {sortedTags.map((tag, index) => (
        <div
          style={{
            background: index % 2 === 0 ? colors.primary : colors.background,
            height: '20rem',
            marginBottom: '2rem',
            padding: '1rem 0',
          }}
          key={index}
        >
          <Link
            to={`/tags/${tag[0]}`}
            style={{
              textDecoration: 'none',
              color: colors.text,
            }}
          >
            <h2>
              {tag[0]}
              :
              {tag[1]}
            </h2>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export default SecondPage;
