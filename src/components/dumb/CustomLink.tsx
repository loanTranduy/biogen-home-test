import { FC } from 'react'
import styled from 'styled-components';
import { linkColors } from '../../styles/colors';
import { fontFamilies } from '../../styles/fonts';
import { fontSize, lineHeight } from '../../styles/mixins';


const LinkStyle = styled.a`
  color: ${linkColors.initial};
  text-decoration: none;
  font-family: ${fontFamilies.secondary};
  ${fontSize(14)};
  ${lineHeight(21)};
  &:hover{
    text-decoration: underline;
    color: ${linkColors.hover};
  }
`;

type Props = {
    to:string
}

const CustomLink:FC<Props> = ({children, to}) => {
    return <LinkStyle href={to}>{children}</LinkStyle>
}

export default CustomLink
