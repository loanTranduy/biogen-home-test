import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from './MultiCarousel.style';
import CustomCarouselButtonsGroup from './CustomCarouselButtonsGroup';

export type CarouselProps = {
    withSubTitle?: boolean,
    withBoxShadow?: boolean
}
const MultiCarousel:FC<CarouselProps>= ({children, withSubTitle, withBoxShadow}) => {
    return (
        <Container withSubTitle={withSubTitle} withBoxShadow={withBoxShadow}>
            <Carousel
            aria-hidden="false"
                className="carousel"
                infinite
                customButtonGroup={<CustomCarouselButtonsGroup/>}
                renderButtonGroupOutside
                responsive={{
                    mobile: {
                        breakpoint: {
                        max: 576,
                        min: 0
                        },
                        items: 1.5,

                    },
                    tablet: {
                        breakpoint: {
                        max: 768,
                        min: 577
                        },
                        items: 2.5,
                    },
                    desktop: {
                        breakpoint: {
                        max: 992,
                        min: 769
                        },
                        items: 3,
                    },
                    largeDesktop: {
                        breakpoint: {
                        max: 3000,
                        min: 993
                        },
                        items: 3,
                    },
                }}
                arrows={false}
                showDots={false}
                slidesToSlide={1}
                swipeable
                keyBoardControl
                minimumTouchDrag={0}
            >
                {children}
            </Carousel>
        </Container>
    )
}

export default MultiCarousel
