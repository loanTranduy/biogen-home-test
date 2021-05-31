import React from 'react'
import styled from 'styled-components';
import { media } from '../../styles/mediaqueries';
import { containerWidth } from '../../styles/variables';


const Container = styled.div`
  margin: 64px 16px 40px;

  ${media.sm`
    margin: 64px 24px 64px; 
`} 
  ${media.lg`
    max-width: ${containerWidth}px;
    margin: 64px auto; 
    padding: 0 48px;
`} 
`;

const Grid: React.FC = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Grid
