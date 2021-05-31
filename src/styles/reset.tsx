import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { backgroundColors, textColors} from "./colors";
import { fontFamilies } from "./fonts";
import { media } from './mediaqueries';
import { fontSize, lineHeight } from './mixins';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  #root{
    overflow-x: hidden;
  }

    * {
      box-sizing: border-box;
    }

    body,
    html {
      position: relative;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: block;
    }

    body{
      font-family: ${fontFamilies.primary};
      font-style: normal;
      font-weight: 500;
      color: ${textColors.primary};
      background: ${backgroundColors.primary};

      font-size: 14px;
      line-height: 20px;
      ${media.lg`
        font-size: 16px;
        line-height: 24px;
        `}
    }

    h4{
      ${fontSize(16)};
      ${lineHeight(24)};
    }

    h2, p{
      margin: 0;
    }
    
    ul {
      margin: 0;
      padding: 0;
    }

    li {
      list-style-type: none;
    }
    
    button, a {
      cursor: pointer;
    }

    .icon-arrow:before { content: '\e800'; } /* '' */
.icon-play:before { content: '\e801'; } /* '' */
.icon-plus:before { content: '\e802'; } /* '' */
.icon-star:before { content: '\e803'; } /* '' */
`;
