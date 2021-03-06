import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { css, Main } from 'theme-ui';
import '../fonts/Nunito.css';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css({
        '*': {
          boxSizing: `inherit`,
          scrollBehavior: `smooth`,
        },
        html: {
          height: `100%`,
          transition: `all 0.1s ease-in-out`,
        },
        body: {
          height: `100%`,
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          fontSize: `18px`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
          color: `text`,
          backgroundColor: `background`,
          fontFamily: `body`,
          lineHeight: `body`,
          fontWeight: `body`,
        },
        '::selection': {
          backgroundColor: `text`,
          color: `background`,
        },
        '#___gatsby': {
          height: `100%`,
          position: `relative`,
        },
        '#gatsby-focus-wrapper': {
          height: `100%`,
          display: `flex`,
          flexDirection: `column`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          textDecoration: `none`,
          color: `primary`,
          '&:hover': {
            color: `textMuted`,
          },
        },
        h1: {
          mt: 0,
        },
        span: {
          fontSize: [1, 1, 2],
        },
      })}
    />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
