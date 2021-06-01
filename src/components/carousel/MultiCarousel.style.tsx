import styled from "styled-components";
import { media } from "../../styles/mediaqueries";
import { gutterSmall, gutterMedium, gutterLarge } from "../../styles/variables";
import { CarouselProps } from "./MultiCarousel";

export const Container = styled.div`
position: relative;
margin: 0 0 0 -8px;

${media.sm`
    margin: 0;
`}

.carousel{
    overflow: initial;
    padding: ${(props: CarouselProps) => props.withBoxShadow ? "24px 0 32px" : 0};
    margin: ${(props: CarouselProps) => props.withBoxShadow ? "-24px 0 -32px" : 0};

    ${media.sm`
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
    font-size: 24px;
    display: none;
    padding: 0;
    ${media.sm`
        display: flex;
        bottom: -56px;
        transform: ${(props: CarouselProps) => props.withSubTitle ? 'none' : 'translateY(-50%)'};
    `}
    ${media.lg`
      top: ${(props: CarouselProps) => props.withSubTitle ? '60px' :  '50%'};
      bottom: auto;
    `}
  } 

  > button:first-of-type{
    right: 60px;
    ${media.sm`
      right: 72px;
    `}
    ${media.lg`
      right: auto;
      left: -48px;
    `}
  }
  > button:last-of-type{
    transform:${(props: CarouselProps) => props.withSubTitle ? 'rotate(180deg)' : 'translateY(-50%) rotate(180deg)'};
    right: 0;
    ${media.sm`
      right: 12PX;
    `}
    ${media.lg`
      right: -48px;
    `}
  }
`;