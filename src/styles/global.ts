import { createGlobalStyle } from 'styled-components'
import { COLORS } from './variables'

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-weight: normal;
  }
  
  html {
    font-size: 62.5%;
    font-family: Arial, sans-serif;
  }
  
  body {
    background: ${COLORS.background};
    box-sizing: border-box;
  }
`

export default GlobalStyles
