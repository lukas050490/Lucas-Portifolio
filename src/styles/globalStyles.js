import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Faculty Glyphic", sans-serif;
  }

  body {
    overflow-x: hidden;
    background: #000;
  }
`
