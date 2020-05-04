import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { PropTypes } from 'prop-types';

import Header from './header';
import Footer from './footer';
import { colors, typography, appearance, animation } from '../utils/variables';
import ScrollToTop from './ScrollTopButton';

const Layout = ({ children, location, posts }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata.title}
        location={location}
        posts={posts}
      />

      <main
        style={{
          background: colors.ternary,
          margin: '0 auto',
          maxWidth: appearance.headerWidth,
        }}
      >
        <ScrollToTop />
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const GlobalStyle = createGlobalStyle`
*, *:after, *:before{
  box-sizing: border-box;
}

html{
  font-family: sans-serif;
  font-size: 62.5%;

}
body{
  background: ${colors.ternary};
  position: relative;
  padding: 0 0 13rem 0;
  min-height: 100vh;

}

main{
  flex: 1 0 auto;
}
a{
  font-weight: bold;
  color: ${colors.secondary};
  text-shadow: ${typography.shadowPrimary};
  transition: ${animation.transition.hover};

  &:hover{
    color: ${colors.primary};
    text-shadow: ${typography.shadowSecondary};
    text-decoration: none;
    transition: ${animation.transition.hover};
  }
}
h1, h2, h3, h4, h5, h6{
  font-weight: bold;
  color: ${colors.text};
  text-shadow: ${typography.shadowPrimary};
  transition: ${animation.transition.hover};
  &:hover{
    transition: ${animation.transition.hover};
  }
}
h1{
  font-size: 3.5rem;
  margin: 2rem 0;
}
h2{
  font-size: 3rem;
  margin: 1.5rem 0;
}
h3{
  font-size: 2.5rem;
  margin: 1.2rem 0;
}
h4{
  font-size: 2.2rem;
}
h5{
  font-size: 1.7rem;
}
h6{
  font-size: 1.3rem;
}
p, article{
  font-size: 1.8rem;
}
small{
  font-size: 1.2rem;
  font-style: italic;
}
`;

export default Layout;
