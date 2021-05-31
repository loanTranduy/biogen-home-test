import styled from 'styled-components';
import { backgroundColors } from '../../styles/colors';
import { media } from '../../styles/mediaqueries';
import { borderRadius } from '../../styles/variables';

export const BoxShadow = styled.div`
    box-shadow: ${backgroundColors.shadow};
    border-radius: ${borderRadius}px;
    padding: 16px 12px 8px 12px;
    position: relative;
    overflow: hidden;
    background: ${backgroundColors.primary};
    ${media.lg`
        padding: 16px 16px 16px 12px;
    `}
`;

