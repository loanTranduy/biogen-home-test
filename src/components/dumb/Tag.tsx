import { FC } from 'react'
import styled from 'styled-components';
import { textColors, tagBackgroundColors } from '../../styles/colors';
import { media } from '../../styles/mediaqueries';
import { fontSize, lineHeight } from '../../styles/mixins';

/* line-height: ${props => props.small ? 1.5 : '30px'} */

const Box = styled.div<Props>`
    display: inline-block;
    color: ${props => props.backgroundColor === "white" ? textColors.secondary : textColors.light};
    ${props => props.small ? lineHeight(24) : lineHeight(30)}; 
    ${fontSize(12)};
    padding: 0 8px;
    border-radius: 4px; 
    background: ${props => props.backgroundColor ? tagBackgroundColors[props.backgroundColor] : tagBackgroundColors.grey4};
    text-transform: uppercase;
    ${media.lg`
        ${lineHeight(30)};
    `}

    p{
        vertical-align: -webkit-baseline-middle;
    }
`;

type tagBackgroundColorsStrings = keyof typeof tagBackgroundColors;
interface Props { 
    backgroundColor?: tagBackgroundColorsStrings,
    small?: boolean
}

const Tag:FC<Props> = ({children, backgroundColor, small}) => {
    return (
        <Box backgroundColor={backgroundColor} small={small}>
            <p>{children}</p>
        </Box>
    )
}

export default Tag
