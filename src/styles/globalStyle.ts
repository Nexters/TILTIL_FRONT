import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { boxModel } from './boxModel';
import theme from './theme';
import typography from './typography';

const globalStyle = css`
  ${emotionReset};
  ${boxModel('')};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  html {
    background-color: ${theme.colors.background.global};
  }

  h1 {
    ${typography.h1};
  }
  h2 {
    ${typography.h2};
  }
  h3 {
    ${typography.h3};
  }
  h4 {
    ${typography.h4};
  }
  h5 {
    ${typography.h5};
  }
  h6 {
    ${typography.h6};
  }

  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
  }

  #__next {
    display: flex;
    justify-content: center;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    padding: 0;

    :disabled {
      cursor: default;
    }
  }

  a {
    all: unset;
    cursor: pointer;
  }
`;

export default globalStyle;
