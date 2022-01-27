import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyle = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    border: 0;
  }

  #__next {
    display: flex;
    justify-content: center;
    background: #e5e5e5;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    padding: 0;
  }
`;

export default globalStyle;
