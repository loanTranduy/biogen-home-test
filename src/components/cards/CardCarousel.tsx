import { mockedCards } from '../../constants/mocked-cards';
import Section from '../layout/Section'
import MultiCarousel from '../carousel/MultiCarousel'
import CardItem from '../../components/cards/CardItem';

const CardCarousel = () => {
    const seeAll = 'Alle zeigen(' + mockedCards.length + ')'
    
    return (
        <Section title="Neu auf BiogenLinc" withRightLink={seeAll} to="/">
                <MultiCarousel withBoxShadow>
                    {mockedCards.map((card, i) => (
                            <CardItem 
                            key={i}
                            title={card.title} 
                            image={card.image.src} 
                            imageAlt={card.image.alt} 
                            tag={card.tag} 
                            follow={card.follow}
                            score={card.score}
                            />
                    ))}
                </MultiCarousel>
        </Section>
    )
}

export default CardCarousel
