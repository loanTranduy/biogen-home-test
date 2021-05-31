import React from 'react'
import styled from 'styled-components';
import { media } from '../../styles/mediaqueries';
import { containerWidth } from '../../styles/variables';


const Container = styled.div`
  margin: 64px 16px 40px;
  
  ${media.lg`
    max-width: ${containerWidth}px;
    margin: 16px auto 64px auto ; 
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
