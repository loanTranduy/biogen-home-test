import {FC} from 'react'
import styled from 'styled-components';
import { backgroundColors } from '../../styles/colors';

const Bar = styled.div<Props>`
  bottom: 0;
  background: ${backgroundColors.progressBar};
  width: calc(${props => props.completedTime && props.totalTime && props.completedTime / props.totalTime}% * 100);
  height: 8px;
`;

type Props = {
  totalTime?: number,
  completedTime?: number

}
const ProgressBar:FC<Props> = ({totalTime, completedTime}) => {
    return <Bar completedTime={completedTime} totalTime={totalTime}/>
}

export default ProgressBar
