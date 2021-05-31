import styled from "styled-components";
import { media } from "../../styles/mediaqueries";
import { gutterSmall, gutterMedium, gutterLarge, buttonSize } from "../../styles/variables";

export const Container = styled.div`
position: relative;
margin: 0 0 0 -8px;

${media.sm`
    margin: 0;
`}

.carousel{
    overflow: initial;

    ${media.lg`
        overflow: hidden;
    `}
}

//Gutters
  li > a, li > div{
    margin: 0 calc(${gutterSmall}px/2);
    ${media.sm`
      margin: 0 calc(${gutterMedium}px/2);
  `}
  ${media.lg`
      margin: 0 calc(${gutterLarge}px/2);
  `}
  }
  
  //buttons outside
  > button{
    position: absolute;
    min-width: ${buttonSize}px;
    min-height: ${buttonSize}px;
    font-size: 24px;
    display: none;
    ${media.sm`
        display: flex;
        bottom: -48px;;
    `}
    ${media.lg`
      top: 83px;
      bottom: auto;
    `}
  } 

  > button:first-of-type{
    right: 60px;
    ${media.lg`
    right: auto;
    left: -43px;
    `}
  }
  > button:last-of-type{
    transform:rotate(180deg) ;
    right: 0;
    ${media.lg`
      right: -43px;
    `}
  }
`;