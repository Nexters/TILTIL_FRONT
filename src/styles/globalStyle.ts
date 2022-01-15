import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const globalStyle = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  html,
  body,
  #__next {
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  a {
    cursor: pointer;
  }

  select {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    padding: 0;
  }

  textarea {
    -ms-overflow-style: none;
    scrollbar-width: none;
    outline: none;
    border: none;
    resize: none;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default globalStyle;
