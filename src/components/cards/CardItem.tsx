import Tag from '../dumb/Tag'
import MaskRatio from '../layout/MaskRatio'
import { BoxShadow } from '../dumb/BoxShadow';
import Favorite from '../dumb/Favorite';
import ButtonIcon from '../buttons/ButtonIcon';
import { FC } from 'react';
import MultilineEllipsis from '../dumb/MultilineEllipsis';
import Star from '../../assets/icons/star.svg';
import Play from '../../assets/icons/play.svg';
import Plus from '../../assets/icons/plus.svg';
import { Absolute, FlexBox, Horizontal, Footer, AlignBottom, FlexCenter } from './CardItem.style';
import { firstLetterUpperCase } from '../../styles/mixins';

type Props = {
    score?: number,
    image: string,
    imageAlt: string,
    title: string,
    follow?: number,
    tag?: string
}

const CardItem:FC<Props> = ({score, image, imageAlt, title, follow, tag}) => {
    return (
        <BoxShadow>
            <Absolute>
                <MaskRatio ratio="square" round>
                    {/* //TODO srcSet   + Lazy load spinner*/}
                    <img src={image} alt={imageAlt}/>
                </MaskRatio>
            </Absolute>
            <FlexBox>     
                <Horizontal>
                    {tag && <Tag backgroundColor="white">{tag}</Tag>}
                    {score && <Favorite icon={Star}>{score}</Favorite>}
                </Horizontal>
                <ButtonIcon name="play video" onClick={() => {}} icon={Play}/>
            </FlexBox>
            <Footer>
                <AlignBottom>
                    <MultilineEllipsis maxLine={3}>
                        <h5>{firstLetterUpperCase(title)}</h5>
                    </MultilineEllipsis>
                </AlignBottom>
                <FlexCenter>
                    {follow && <p>{follow} Folgen</p>}
                    <ButtonIcon name="follow" onClick={() => {}} icon={Plus}/>
                </FlexCenter>
            </Footer>
        </BoxShadow>
    )
}

export default CardItem
