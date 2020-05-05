import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PropTypes } from 'prop-types';

import styled from 'styled-components';
import _ from 'lodash';
import { colors, appearance, typography } from '../utils/variables';

import Badge from './Badge';

const PostCard = ({ title, tags, slug, description, createdAt, thumbnail }) => {
  return (
    <Article className="card">
      <Img
        className="thumbnail"
        fluid={thumbnail.fluid}
        style={{ borderRadius: '.8rem .8rem 0 0' }}
      />
      <div className="information">
        <Link to={`/${slug}`}>
          <h2 className="title">{title}</h2>
        </Link>
        <small className="date">{createdAt}</small>
        <p className="description">{description}</p>
        <div className="bottom">
          <div className="tags">
            {tags.map(tag => (
              <Badge
                key={tag}
                to={`/tags/${_.kebabCase(tag)}`}
                theme="primary"
                size="md"
                tag={tag}
              >
                {`#${tag}`}
              </Badge>
            ))}
          </div>
          <Badge
            size="bg"
            theme="secondary"
            className="read-more"
            to={`/${slug}`}
          >
            Read more...
          </Badge>
        </div>
      </div>
    </Article>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  thumbnail: PropTypes.objectOf(PropTypes.any).isRequired,
};

//* styled-component < 💅>
const Article = styled.div`
  margin: 2rem auto 0 auto;
  max-width: ${appearance.articleWidth}px;
  border: solid 3px ${colors.secondary};
  border-radius: 1rem;
  z-index: 2;
  @media (max-width: 770px) {
    margin: 2rem 2rem;
  }
  .thumbnail {
    max-height: 30rem;

    @media screen and (max-width: 767px) {
      max-height: 20rem;
    }
  }
  .information {
    padding: 1rem 1rem 1rem 1rem;
    .title {
      margin-bottom: 0.5rem;

      @media screen and (max-width: 320px) {
        font-size: 2.3rem;
      }

      &:hover {
        color: ${colors.primary};
        text-shadow: ${typography.shadowSecondary};
      }
    }
    .date {
      margin-bottom: 1rem;
    }
    .description {
      margin-top: 0.5rem;
      font-size: 1.6rem;
      @media screen and (max-width: 320px) {
        font-size: 1.5rem;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap-reverse;
      align-items: center;
      .tags {
        display: flex;
        margin-top: 1rem;
      }
    }
  }
`;

export default PostCard;
