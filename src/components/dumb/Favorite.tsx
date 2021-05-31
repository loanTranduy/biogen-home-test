import { FC } from 'react';
import styled from 'styled-components';
import { backgroundColors } from '../../styles/colors';
import { fontSize, lineHeight } from '../../styles/mixins';
import { ReactSVG } from "react-svg";

const IconLabel = styled.div`
  ${fontSize(14)};
  ${lineHeight(21)};
  display: flex;
    p{
        margin-right: 8px;
    }
    svg{
      color: ${backgroundColors.favorite};          
      fill: ${backgroundColors.favorite};
    }
`;

type Props = {
    icon: string
}

const Favorite:FC<Props> = ({children, icon}) => {
    return (
        <IconLabel>
            <p>{children}</p>
            <ReactSVG src={icon} />
        </IconLabel>
    )
}

export default Favorite
