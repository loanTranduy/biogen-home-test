import { FC } from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import ButtonIcon from '../buttons/ButtonIcon';
import Arrow from '../../assets/icons/arrow.svg';

const CustomCarouselButtonsGroup:FC<ButtonGroupProps> = ({ next, previous }) => {
    return (
      <>
        <ButtonIcon name="previous slide" onClick={previous && (() => previous())} icon={Arrow}/>
        <ButtonIcon name="next slide" onClick={next && (() => next())} icon={Arrow}/>
      </>
    );
  };

export default CustomCarouselButtonsGroup