import styled from "styled-components";
import { backgroundColors } from "../styles/colors";
import { media } from "../styles/mediaqueries";

export const Header= styled.header`
height: 64px; 
width: 100vw;
background: ${backgroundColors.secondary};
${media.lg`
    height: 72px; 
`}
`