import { FC } from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import ButtonIcon from '../buttons/ButtonIcon'
import Arrow from '../../assets/icons/arrow.svg'

const CustomCarouselButtonsGroup:FC<ButtonGroupProps> = ({ next, previous }) => {
    return (
      <>
        <ButtonIcon onClick={previous && (() => previous())} icon={Arrow}/>
        <ButtonIcon onClick={next && (() => next())} icon={Arrow}/>
      </>
    );
  };

export default CustomCarouselButtonsGroup