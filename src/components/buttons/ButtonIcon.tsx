import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { FC } from "react";
import { buttonColors } from "../../styles/colors";
import { media } from "../../styles/mediaqueries";

const Button = styled.button`
    border-radius: 50%;
    border: none;
    background: ${buttonColors.initial.background};
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    transition: all .2s ease-in-out;

    svg{
        fill: ${buttonColors.initial.content};
        transition: all .2s ease-in-out; 
        display: block;
        display: inline-block;
    }

    >div{
        display: contents;

    }
    
    ${media.md`
        &:hover {
            background: ${buttonColors.hover.background};
            svg{
                fill: ${buttonColors.hover.content};
            }
        }
  @`}
`;

type Props = {
    onClick?: () => void,
    icon: string,
    disabled?: boolean,
    name: string
}

const ButtonIcon:FC<Props> = ({onClick, icon, disabled, name}) => (
  <Button aria-label={name} onClick={onClick} disabled={disabled}>
    <ReactSVG src={icon} />
  </Button>
);

export default ButtonIcon
