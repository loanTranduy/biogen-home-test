import styled from "styled-components";
import { backgroundColors, textColors } from "../../styles/colors";
import { media } from "../../styles/mediaqueries";
import { flexBox, fontSize, lineHeight } from "../../styles/mixins";


export const Absolute = styled.div`
    position: absolute;
    top: -34px;
    left: -30px;
    z-index: 1;
    width: 80%;
    max-width: 196px;
    ${media.lg`
        width: 227px;
        max-width: 227px;
    `}
`;

export const FlexBox = styled.div`
  ${flexBox("column", "space-between", "flex-end")};
  position:  relative;
  z-index: 2;
  > button{
      font-size: 20px;
      width: 48px;
      height: 48px;
      svg{
        height: 20px;
      }
      ${media.md`
      &:hover {
            background: ${backgroundColors.progressBar};
            svg{
                fill: white;
        }
      }
  `}

      ${media.lg`
      width: 60px;
      height: 60px;
      svg{
        height: 24px;
      }
  
      `}
      
  }

  height: 141px;
  ${media.lg`
    height: 212px;
  `}
`;

export const Horizontal = styled.div`
  ${flexBox( "row" , "space-between", "flex-start")};
  position:  relative;
  z-index: 2;
  width: 100%;
`;

export const Footer = styled.div`
    margin-top: 24px;
    ${media.lg`
    margin-top: 12px;
  `}

  button{
      font-size: 16px;
      margin-top: 4px;
  }

  h5{
      margin-right: 16px;
  }
`;

export const AlignBottom = styled.div`
  ${flexBox( "column" , "flex-end", "flex-start")};
  ${fontSize(16)};
  ${lineHeight(24)};
  margin-bottom: 4px;
  min-height: 72px; // TODO dev to put dynamic value 
  ${media.lg`
    min-height: 64px; // TODO dev to put dynamic value 
  `}
`;

export const FlexCenter = styled.div`
    ${flexBox( "row" , "space-between", "center")};
    p{
      text-transform: uppercase;
      color: ${textColors.secondary};
      ${fontSize(14)};
      ${lineHeight(21)};
    }
    button{
      width: 32px;
      height: 32px;
      svg{
        height: 12px;
      }
    }
`;