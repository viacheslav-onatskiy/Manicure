import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
  }

  *, body {
    margin: 20;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export const PageHeading = styled.div`
  text-align: center;
  color: #f0f0f0;

  padding: 35px 0;
  font-size: 30px;

  background: linear-gradient(
    150deg,
    rgba(253, 77, 153, 1) 14%,
    rgba(62, 233, 242, 1) 80%
  );
`;
