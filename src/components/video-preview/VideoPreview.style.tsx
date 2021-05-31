import styled from "styled-components";
import { textColors } from "../../styles/colors";
import { media } from "../../styles/mediaqueries";

export const Box = styled.a`
display: block;
text-decoration: none;
color: ${textColors.primary};

&:hover{

    > div > p{
        text-decoration: underline;
    }
}

//Title
> div > p{
    margin-top: 8px;
}

div:first-of-type{
    //Tag + Time
    div:nth-of-type(1), 
    div:nth-of-type(2){
      left: 4px;
    }

    //Tag
    div:nth-of-type(1){
      top: 4px;
    } 

    //Time
    div:nth-of-type(2){
        bottom: 12px;
        display: none;
        ${media.lg`
            display: block;
        `}
    } 
}
`;