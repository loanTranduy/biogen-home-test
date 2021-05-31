import { Header } from './components/dumb/Header'
import Grid from './components/layout/Grid';
import Section from './components/layout/Section';
import MultiCarousel from './components/carousel/MultiCarousel';
import styled from 'styled-components';

const placeHolders = [
    {
        tilte: "1"
    },
    {
        tilte: "2"
    },
    {
        tilte: "3"
    },
    {
        tilte: "4"
    },
    {
        tilte: "2"
    },
    {
        tilte: "3"
    },
    {
        tilte: "4"
    },
]

const Element = styled.div`
  height: 200px;
  background: lightgrey;
`;

const LinkBox = styled.a`
  height: 200px;
  background: lightblue;
  display: block;
`;

const App = () => (
    <>
        <Header/>
        <Grid>
            <Section title="title" withRightLink="See all" to="/">
                <MultiCarousel>
                    {placeHolders.map((placeHolder, i) => (
                            <Element key="i">{placeHolder.tilte}</Element>
                    ))}
                </MultiCarousel>
            </Section>
            <Section title="title" withRightLink="See all" to="/">
                <MultiCarousel>
                    {placeHolders.map((placeHolder, i) => (
                            <LinkBox key="i">{placeHolder.tilte}</LinkBox>
                    ))}
                </MultiCarousel>
            </Section>
        </Grid>  
    </>
    )
export default App;