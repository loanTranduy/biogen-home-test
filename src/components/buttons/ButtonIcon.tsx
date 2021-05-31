import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { FC } from "react";
import { buttonColors } from "../../styles/colors";
import { media } from "../../styles/mediaqueries";

const Button = styled.button`
    border-radius: 50%;
    border: none;
    background: ${buttonColors.initial.background};
    fill: ${buttonColors.initial.content};
    align-items: center;
    justify-content: center;
    >div{
        display: contents;

    }
    ${media.md`
        &:hover svg{
            opacity: .6;
        }
  `}

    svg{
        transition: all .2s ease-in-out;
    }
`;

type Props = {
    onClick?: () => void,
    icon: string,
    disabled?: boolean
}

const ButtonIcon:FC<Props> = ({onClick, icon, disabled}) => (
  <Button onClick={onClick} disabled={disabled}>
    <ReactSVG src={icon} />
  </Button>
);

export default ButtonIcon
