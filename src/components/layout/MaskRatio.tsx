import React from 'react'
import styled from 'styled-components';
import { backgroundColors } from '../../styles/colors';
import { Ratios } from '../../styles/mixins';
import { borderRadius } from '../../styles/variables';

const MaskWrap = styled.div`
  border-radius: ${props => props.round ? '50%' : (borderRadius + 'px')};
  overflow: hidden;
  background: ${backgroundColors.tertiary};

  position: relative;
    height: 0;
    padding-top: ${(props: Props) => props.ratio && Ratios[props.ratio]};

    >*{
        position: absolute;
    }

    >div{
        z-index: 2; 
    }

    >img{
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
    }
`;

type ratiosStrings = keyof typeof Ratios;

interface Props {
    ratio: ratiosStrings,
    round?: boolean
}

const MaskRatio: React.FC<Props>= ({children, ratio, round}) => {
    return (
        <MaskWrap ratio={ratio} round={round}>
            {children}
        </MaskWrap>
    )
}

export default MaskRatio
