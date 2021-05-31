import styled from 'styled-components';
import { FC } from 'react'
import CustomLink from '../dumb/CustomLink'
import { gutterLarge, titleMarginBottom, gutterMedium } from '../../styles/variables';
import { firstLetterUpperCase } from '../../styles/mixins';
import { media } from '../../styles/mediaqueries';

const Container = styled.section`
  padding-bottom: 48px;
  ${media.sm`
    padding-bottom: 96px;
  `}

  // Title 
  >h4{
    margin-bottom: ${titleMarginBottom}px;
  }
`;

//Title with Link on right
const Wrapper = styled.div`
  margin-bottom: ${titleMarginBottom}px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${media.sm`
    margin: 0 calc(${gutterMedium}px/2) ${titleMarginBottom}px; 
  `}
  ${media.lg`
    margin: 0 calc(${gutterLarge}px/2) ${titleMarginBottom}px; 
  `}
`;

  type Props = {
    title: string,
    withRightLink?: string,
    to?: string  
    }

const Section:FC<Props> = ({children, title, withRightLink, to}) => {
    return (
        <Container>
            {title && withRightLink ? 
                <Wrapper>
                    <h4>{firstLetterUpperCase(title)}</h4>
                    {to &&<CustomLink to={to}>{withRightLink}</CustomLink>}
                </Wrapper>
            : title && <h4>{firstLetterUpperCase(title)}</h4>
            }
            {children}
        </Container>
    )
}

export default Section
